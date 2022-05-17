<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  import ConfirmButton from "./components/ConfirmButton.svelte";
  import DayInput from "./components/DayInput.svelte";
  import Operations from "./components/Operations.svelte";
  import Preferences from "./components/Preferences.svelte";
  import {
    ClockedDay,
    data_localstorage_key,
    day_complete,
    day_hours,
    live_day_hours,
    make_day,
    round_time,
  } from "./lib/utility";
  import {
    lunch_minutes,
    target_week_hours,
    usual_start_time,
    hourly_pay_rate,
    overtime_pay_rate,
    show_pay,
  } from "./lib/work_context";
  import "./styles/global.scss";

  let days: ClockedDay[] = [{}, {}, {}, {}, {}];
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  let live_hours = 0;
  let base_pay = 0;
  let overtime_pay = 0;
  $: days, $lunch_minutes, recompute_live_hours();
  $: live_hours, $overtime_pay_rate, $hourly_pay_rate, recompute_pay();

  const recompute_live_hours = () => {
    live_hours = days.map(live_day_hours).reduce((acc, v) => acc + v, 0);
  };

  const recompute_pay = () => {
    base_pay = Math.min($target_week_hours, live_hours) * $hourly_pay_rate;
    if (live_hours < $target_week_hours) {
      overtime_pay = 0;
      return;
    }
    overtime_pay =
      (live_hours - $target_week_hours) * $overtime_pay_rate * $hourly_pay_rate;
  };

  const save = () => {
    const data = {
      days,
      lunch_minutes: $lunch_minutes,
      target_week_hours: $target_week_hours,
      usual_start_time: $usual_start_time,
      hourly_pay_rate: $hourly_pay_rate,
      overtime_pay_rate: $overtime_pay_rate,
      show_pay: $show_pay,
    };
    localStorage.setItem(data_localstorage_key, JSON.stringify(data));
  };

  const load = () => {
    const data = JSON.parse(localStorage.getItem(data_localstorage_key));
    days = data.days;
    $lunch_minutes = data.lunch_minutes;
    $target_week_hours = data.target_week_hours;
    $usual_start_time = data.usual_start_time;
    $hourly_pay_rate = data.hourly_pay_rate;
    $overtime_pay_rate = data.overtime_pay_rate;
    $show_pay = data.show_pay;
  };

  onMount(load);
  const save_interval = setInterval(save, 200);
  onDestroy(() => clearInterval(save_interval));

  const reset_app = () => {
    clearInterval(save_interval);
    localStorage.setItem(data_localstorage_key, undefined);
    location.reload();
  };
</script>

<div class="container">
  <div>
    <div>
      <strong>Payed Time:</strong>
      {live_hours.toFixed(2)} hours
      {#if $show_pay}
        <br />
        <strong>Total Pay:</strong> ${(base_pay + overtime_pay).toFixed(2)}
      {/if}
      {#if Math.floor(overtime_pay) > 0}
        <br />
        <strong>Overtime:</strong>
        {(live_hours - $target_week_hours).toFixed(2)} hours
        {#if $show_pay}(${overtime_pay.toFixed(2)}){/if}
      {/if}
    </div>
    <progress value={live_hours} max={$target_week_hours} />
  </div>

  <div>
    <table>
      <thead>
        <th>Weekday</th>
        <th>Clock-In</th>
        <th>Clock-Out</th>
        <th>Hours</th>
        <th>Operations</th>
      </thead>
      <tbody>
        {#each days as day, i}
          <DayInput bind:day weekday={weekdays[i]} />
        {/each}
      </tbody>
    </table>
  </div>

  <Operations bind:days />

  <Preferences {reset_app} />
</div>

<style lang="scss">
  details {
    margin-top: 0.5rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .day-stack {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  thead {
    text-align: center;
  }

  progress {
    width: 20rem;
  }
</style>
