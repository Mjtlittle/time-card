import { get } from "svelte/store";
import { lunch_minutes, usual_start_time } from "../lib/work_context";

export const data_localstorage_key = "app-data";

export type Time = [number, number];

export interface TimeRange {
  start: Time;
  end: Time;
}

export type ClockedDay = Partial<TimeRange>;

export const time_to_hours = (time: Time): number => time[0] + time[1] / 60;
export const hours_to_time = (time: number): Time => [
  Math.floor(time),
  Math.round((time - Math.floor(time)) * 60),
];

export const hours_between = (time1: Time, time2: Time) =>
  time_to_hours(time2) - time_to_hours(time1);

export const get_now = (): Time => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  return [hours, minutes];
};

export const day_hours = (day: ClockedDay) => {
  if (!day_complete(day)) return 0;

  let hours = hours_between(day.start, day.end);
  hours -= get(lunch_minutes) / 60;

  return hours;
};

export const live_day_hours = (day: ClockedDay) => {
  if (!day.start && !day.end) return 0;

  let hours = 0;
  if (day_complete(day)) hours = hours_between(day.start, day.end);
  else if (!day.end) {
    const now = get_now();
    hours = hours_between(day.start, now);
  }

  hours -= get(lunch_minutes) / 60;
  return hours;
};

export const day_complete = (day: ClockedDay): boolean =>
  !!(day.start && day.end);

export const make_day = (old_day: ClockedDay, hours: number): ClockedDay => {
  const day: ClockedDay = { ...old_day };

  if (!day.start) day.start = get(usual_start_time);

  const start_hours = time_to_hours(day.start);
  const end_hours = start_hours + hours + get(lunch_minutes) / 60;
  day.end = hours_to_time(end_hours);

  return day;
};

export const round_time = (day: Time, nearest: number = 15): Time => {
  const [hours, minutes] = day;
  const result: Time = [
    Math.floor(hours),
    Math.round(minutes / nearest) * nearest,
  ];
  if (result[1] >= 60) {
    result[0] += 1;
    result[1] -= 60;
  }
  return result;
};

export const add_hours = (time: Time, hours: number): Time => {
  const new_hours = time_to_hours(time) + hours;
  if (new_hours >= 24) return time;
  return hours_to_time(new_hours);
};

// export const subtract_range = (day: TimeRange, range: TimeRange) => {

// };
