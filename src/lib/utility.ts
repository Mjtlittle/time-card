import { get } from "svelte/store";

import type { Settings } from "./settings";

export const data_localstorage_key = "app-data";

export type Time = number; // minutes since midnight
export type OptionalTime = Time | null;

export interface TimeRange {
  start: OptionalTime;
  end: OptionalTime;
}

export interface Day {
  weekday: Weekday;
  clock: TimeRange;
  pre_clock: TimeRange;
  enabled: boolean;
}

export enum Weekday {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

export const weekdays: Weekday[] = Object.values(Weekday);
export const work_weekdays: Weekday[] = [
  Weekday.Monday,
  Weekday.Tuesday,
  Weekday.Wednesday,
  Weekday.Thursday,
  Weekday.Friday,
];

interface ParseTimeOptions {
  half: "am" | "pm";
}

const default_parsetime_options: ParseTimeOptions = {
  half: "am",
};

export const parse_time = (
  time_string: string,
  options: Partial<ParseTimeOptions> = default_parsetime_options
): OptionalTime => {
  const full_options: ParseTimeOptions = {
    ...default_parsetime_options,
    ...options,
  };

  time_string = time_string.trim();

  // get half of day
  const _remove_suffixes_and_do = (
    str: string,
    sufixes: string[],
    callback: (string) => void
  ) => {
    str = str.toLowerCase();
    for (const suffix of sufixes) {
      if (str.endsWith(suffix)) {
        const new_string = str.substring(0, str.length - suffix.length);
        callback(new_string);
        break;
      }
    }
    return str;
  };

  // determine if 12h offset is required
  let is_am = true;
  let saw_12hr = false;
  _remove_suffixes_and_do(time_string, ["pm", "p"], (new_string) => {
    time_string = new_string;
    is_am = false;
    saw_12hr = true;
  });
  _remove_suffixes_and_do(time_string, ["am", "a"], (new_string) => {
    time_string = new_string;
    saw_12hr = true;
  });

  // parse out hours and minutes
  let final_hours = 0;
  let final_minutes = 0;
  time_string = time_string.trimEnd();
  if (time_string.includes(":")) {
    const [hours, minutes] = time_string.split(":").map((v) => v.trim());

    if (hours == "") return null;
    if (minutes == "") return null;

    final_hours = parseInt(hours);
    final_minutes = parseInt(minutes);
  }

  // if no colon, then number is hours
  else {
    final_hours = parseInt(time_string);
  }

  let time = final_hours * 60 + final_minutes;

  // default half
  if (options.half == "pm" && !saw_12hr && final_hours <= 12) {
    saw_12hr = true;
    is_am = false;
  }

  //
  if (saw_12hr && final_hours == 12 && is_am) time -= 12 * 60;

  //
  if (saw_12hr && !is_am && time < 12 * 60) time += 12 * 60;

  // ret if hours or minutes missing
  if (isNaN(final_hours) || isNaN(final_minutes)) return null;

  // if outside bounds break
  if (final_hours > 23) return null;
  if (final_minutes > 59) return null;

  return time;
};

export const format_time = (
  time: Time,
  twelve_hour: boolean = true
): string => {
  let hours = Math.floor(time / 60);
  let minutes = Math.floor(time % 60);

  let tail = "AM";
  if (time >= 12 * 60) {
    tail = "PM";
    hours -= 12;
  }

  if (hours == 0) hours = 12;

  const hours_string = hours.toString().padStart(2, "0");
  const minutes_string = minutes.toString().padStart(2, "0");

  return `${hours_string}:${minutes_string} ${tail}`;
};

export const time_to_hours = (minutes: Time) => minutes / 60;
export const hours_to_time = (hours: number) => hours * 60;

export const hours_between = (time1: Time, time2: Time) =>
  time_to_hours(time2 - time1);

export const range_minutes = (
  range: TimeRange,
  { lunch_minutes }: Settings
) => {
  if (!range_complete(range)) return 0;
  const diff = range.end - range.start - lunch_minutes;
  if (diff < 0) return 0;
  return diff;
};
export const range_hours = (range: TimeRange, settings: Settings) =>
  time_to_hours(range_minutes(range, settings));

export const range_has_start = (range: TimeRange) => range.start !== null;
export const range_has_end = (range: TimeRange) => range.end !== null;
export const range_has = (
  range: TimeRange,
  has_start: boolean,
  has_end: boolean
) => range_has_start(range) == has_start && range_has_end(range) == has_end;

export const range_complete = (range: TimeRange) =>
  range_has_start(range) && range_has_end(range);

export const sum: [(a: number, b: number) => number, number] = [
  (acc, v) => acc + v,
  0,
];

export const get_now = (): Time => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  return minutes + hours * 60;
};

export const day_complete = ({ clock, enabled }: Day) =>
  !enabled || (clock.start != null && clock.end != null);

export const live_day_hours = (day: Day, { lunch_minutes }: Settings) => {
  const { clock } = day;

  if (!day.enabled) return 0;
  if (!clock.start && clock.end) return 0;
  if (range_has(clock, false, true)) return 0;
  if (!clock.start && !clock.end) return 0;

  let hours = 0;
  if (day_complete(day)) hours = hours_between(clock.start, clock.end);
  else if (clock.start && !clock.end) {
    if (!is_today(day)) return 0;

    const now = get_now();
    hours = hours_between(clock.start, now);
  }

  // take out lunch minutes
  hours -= lunch_minutes / 60;

  if (hours < 0) return 0;

  return hours;
};

export const is_today = (day: Day): boolean => {
  const now = new Date();
  const curr_weekday = weekdays[now.getDay()];
  return day.weekday === curr_weekday;
};

export const day_hours = (day: Day, { lunch_minutes }: Settings) => {
  const { clock } = day;
  if (!day_complete(day)) return 0;

  let hours = hours_between(clock.start, clock.end);
  hours -= lunch_minutes / 60;

  return hours;
};

export const clock_complete = (clock: TimeRange) =>
  clock.start != null && clock.end != null;

export const make_clock = (
  old_clock: TimeRange,
  hours: number,
  { lunch_minutes, usual_start_time }: Settings
): TimeRange => {
  let clock = { ...old_clock };

  let start_time = usual_start_time ?? parse_time("8a");

  // make start time prefered one if day is empty
  if (!clock.start && !clock.end) clock.start = start_time;

  // override end if already provided
  if (clock_complete(clock)) clock.end = null;

  // make from start
  if (!clock.end) {
    const start_minutes = clock.start;
    let end_minutes = start_minutes + hours * 60 + lunch_minutes;
    clock.end = Math.min(23 * 60, end_minutes);
  }

  // make from end
  else if (!clock.start) {
    const end_minutes = clock.end;
    let start_minutes = end_minutes - hours * 60 - lunch_minutes;
    clock.start = Math.max(0, start_minutes);
  }

  return clock;
};

export const predict_week = (days: Day[], settings: Settings) => {
  const { usual_start_time, target_week_hours, lunch_minutes } = settings;

  // copy existing clocks to predicted clocks
  days.forEach((day) => {
    day.pre_clock = { ...day.clock };
  });

  // populate start if end is present
  // days.forEach(({ pre_clock }) => {
  //   if (pre_clock.end && !pre_clock.start) pre_clock.start = usual_start_time;
  // });
  // days = [...days];

  // compute hours left till target
  const total_hours = days
    .map(({ pre_clock }) => range_hours(pre_clock, settings))
    .reduce((acc, v) => acc + v, 0);

  const hours_left = target_week_hours - total_hours;

  if (hours_left > target_week_hours) return;

  // return

  // count the incomplete days
  const enabled_days = days.filter(({ enabled }) => enabled);
  const incomplete_days = enabled_days.filter(
    (day) => !clock_complete(day.pre_clock)
  );
  if (incomplete_days.length == 0) return;

  // make all incomplete days fit the target
  const daily_target = hours_left / incomplete_days.length;
  for (const day of incomplete_days) {
    day.pre_clock = make_clock(day.pre_clock, daily_target, settings);
  }

  // update days
  for (let i = 0; i < days.length; i++) days[i] = { ...days[i] };
};

export const round_time = (time: Time, nearest: number = 15): Time => {
  let hours = Math.floor(time / 60);
  let minutes = Math.floor(time % 60);
  minutes = Math.round(minutes / nearest) * nearest;

  if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }
  return hours * 60 + minutes;
};
