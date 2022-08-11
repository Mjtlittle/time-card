import { assert, describe, expect, it, test } from "vitest";

import { default_settings, Settings } from "./settings";
import {
  format_time,
  get_now,
  make_clock,
  parse_time,
  TimeRange,
} from "./utility";

describe("parse_time()", () => {
  const expect_pt = (time_string: string, expected: number | null) =>
    it(`${time_string} -> ${format_time(expected)}`, () =>
      expect(parse_time(time_string)).toBe(expected));

  expect_pt("now", get_now());

  expect_pt("12:00", 12 * 60);
  expect_pt("12", 12 * 60);
  expect_pt("12a", 0);

  expect_pt("12p", 12 * 60);
  expect_pt("0a", 0);

  "0123456789".split("").forEach((n) => {
    expect_pt(`${n}p`, 12 * 60 + parseInt(n) * 60);
  });

  expect_pt("12:30", 12 * 60 + 30);
  expect_pt("12:30a", 30);

  expect_pt("17", 17 * 60);
  expect_pt("17p", 17 * 60);
  expect_pt("17a", 17 * 60);

  expect_pt("30", null);
  expect_pt("12:90", null);
  expect_pt("a", null);
});

describe("make_clock()", () => {
  const parse_clock_tuple = (tuple: [string, string]): TimeRange => ({
    start: tuple[0] ? parse_time(tuple[0]) : null,
    end: tuple[1] ? parse_time(tuple[1]) : null,
  });

  const settings: Settings = {
    ...default_settings,

    usual_start_time: parse_time("8:00 AM"),
    lunch_minutes: 40,
  };

  const expect_clock = (
    clock: [string, string],
    hours: number,
    expected: [string, string]
  ) => {
    const final_clock: TimeRange = parse_clock_tuple(clock);
    const final_expected: TimeRange = parse_clock_tuple(expected);

    it(`${clock} -> ${expected}`, () =>
      expect(make_clock(final_clock, hours, settings)).toEqual(final_expected));
  };

  expect_clock(["8:00 AM", ""], 8, ["8:00 AM", "4:40 PM"]);
  expect_clock(["8:00 AM", ""], 2, ["8:00 AM", "10:40 AM"]);

  expect_clock(["", ""], 8, ["8:00 AM", "4:40 PM"]);
  expect_clock(["", "2 PM"], 8, ["5:20 AM", "2 PM"]);

  expect_clock(["8 AM", "5 PM"], 8, ["8 AM", "4:40 PM"]);
});

describe("format_time()", () => {
  const expect_parse_format = (text, expected) =>
    it(`${text} => ${expected}`, () =>
      expect(format_time(parse_time(text))).toBe(expected));

  expect_parse_format("1am", "01:00 AM");
  expect_parse_format("2am", "02:00 AM");
  expect_parse_format("12:30pm", "12:30 PM");
  expect_parse_format("12:00pm", "12:00 PM");
});

describe("Format <-> Parse", () => {
  for (let i = 0; i < 60 * 24; i += 5) {
    const formatted = format_time(i, true);
    const parse = parse_time(formatted);

    it(`${i} -> ${formatted} -> ${parse}`, () => expect(parse).toBe(i));
  }
});

describe("default pm parse", () => {
  const expect_am_converging = (a: string, b: string) =>
    it(`'${a}' == '${b}'`, () => {
      expect(parse_time(a, { half: "am" })).toBe(parse_time(b));
    });

  const expect_pm_converging = (a: string, b: string) =>
    it(`'${a}' == '${b}'`, () => {
      expect(parse_time(a, { half: "pm" })).toBe(parse_time(b));
    });

  for (let i = 0; i < 12; i++) {
    expect_am_converging(`${i}`, `${i}:00 AM`);
    expect_pm_converging(`${i}`, `${i}:00 PM`);

    for (let m = 0; m < 60; m++) {
      const min = m.toString().padStart(2, "0");
      expect_am_converging(`${i}:${min}`, `${i}:${min} AM`);
      expect_pm_converging(`${i}:${min}`, `${i}:${min} PM`);
    }
  }
});
