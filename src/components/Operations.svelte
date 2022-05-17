<script lang="ts">
  import {
    ClockedDay,
    day_complete,
    day_hours,
    live_day_hours,
    make_day,
    round_time,
  } from "../lib/utility";

  import {
    lunch_minutes,
    target_week_hours,
    usual_start_time,
    hourly_pay_rate,
    overtime_pay_rate,
    show_pay,
  } from "../lib/work_context";
  import ConfirmButton from "./ConfirmButton.svelte";

  export let days: ClockedDay[];

  const fill_rest_of_week = () => {
    // populate start if end is present
    days.forEach((day) => {
      if (day.end && !day.start) day.start = $usual_start_time;
    });

    // compute hours left till target
    const total_hours = days.map(day_hours).reduce((acc, v) => acc + v);
    const hours_left = $target_week_hours - total_hours;
    if (hours_left > $target_week_hours) return;

    // count the incomplete days
    const incomplete_days = days
      .map(day_complete)
      .filter((value) => value === false).length;
    if (incomplete_days == 0) return;

    // make all open days fit the target
    const daily_target = hours_left / incomplete_days;
    days = days.map((day) => {
      if (day_complete(day)) return day;
      return make_day(day, daily_target);
    });
  };

  const round_leaving_time = () => {
    days = days.map((day) => {
      if (day_complete(day)) day.end = round_time(day.end);
      return day;
    });
  };

  const clear_all = () => {
    days = days.map(() => ({}));
  };
</script>

<div>
  <button on:click={fill_rest_of_week}>Fill Week</button>

  <ConfirmButton on_confirm={round_leaving_time}>
    Round Leaving Time (15 min)
  </ConfirmButton>
  <ConfirmButton on_confirm={clear_all}>Clear All Times</ConfirmButton>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
