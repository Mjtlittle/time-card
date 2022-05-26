import { writable } from "svelte/store";

import { parse_time, Time } from "./utility";

export const data_localstorage_key = "app-data";

export interface Settings {
  usual_start_time: Time;
  lunch_minutes: number;
  target_week_hours: number;
  overtime_hours: number;
  hourly_pay_rate: number;
  overtime_pay_rate: number;
  show_pay: boolean;
  twelve_hour_time: boolean;
  week_predictions: boolean;
  show_whole_week: boolean;
  skipped_days_count: boolean;
  minimal_mode: boolean;
  tax_rate: number;
}

export const default_settings: Settings = {
  usual_start_time: parse_time("8:00"),
  lunch_minutes: 40,
  target_week_hours: 40,
  overtime_hours: 40,
  hourly_pay_rate: 21.28,
  overtime_pay_rate: 1.5,
  show_pay: true,
  twelve_hour_time: true,
  week_predictions: true,
  show_whole_week: false,
  skipped_days_count: false,
  minimal_mode: false,
  tax_rate: 0.2,
};

export const settings = writable(default_settings);
