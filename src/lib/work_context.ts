import { writable } from "svelte/store";
import type { Time } from "./utility";

export const usual_start_time = writable<Time>([8, 0]);
export const lunch_minutes = writable<number>(40);
export const target_week_hours = writable<number>(40);
export const hourly_pay_rate = writable<number>(21.28);
export const overtime_pay_rate = writable<number>(1.5);
export const show_pay = writable<boolean>(true);
