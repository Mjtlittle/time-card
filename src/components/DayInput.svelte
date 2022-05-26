<script lang="ts">
  import { onDestroy } from "svelte";
  import DeleteIcon from "~icons/fa-solid/trash";

  import { settings } from "../lib/settings";
  import {
    Day,
    live_day_hours,
    make_clock,
    predict_week,
    range_complete,
    range_hours,
  } from "../lib/utility";
  import Icon from "./IconButton.svelte";
  import TimeInput from "./TimeInput.svelte";

  export let day: Day;

  let live_hours = 0;
  $: day, $settings.lunch_minutes, recompute_hours();
  const recompute_hours = () => {
    live_hours = live_day_hours(day, $settings);
  };

  const make_8hrs = () => {
    day.clock = make_clock(day.clock, 8, $settings);
  };

  const clear = () => {
    day.clock = { start: null, end: null };
  };

  const take_pred = () => {
    day.clock = day.pre_clock;
  };

  const hourcomp_interval = setInterval(recompute_hours, 5000);
  onDestroy(() => clearInterval(hourcomp_interval));
</script>

<tr class="container">
  <td class="weekday">{day.weekday}</td>
  <td>
    <input type="checkbox" bind:checked={day.enabled} />
  </td>
  <td class="clock-time">
    <TimeInput
      bind:value={day.clock.start}
      bind:shadow_time={day.pre_clock.start}
      show_shadow={$settings.week_predictions}
      disabled={!day.enabled}
    />
  </td>
  <td class="clock-time">
    <TimeInput
      bind:value={day.clock.end}
      bind:shadow_time={day.pre_clock.end}
      show_shadow={$settings.week_predictions}
      disabled={!day.enabled}
    />
  </td>
  <td class="hours">
    {live_hours.toFixed(2)}
    {#if !range_complete(day.clock) && $settings.week_predictions}
      <span class="hours-prediction">
        ({range_hours(day.pre_clock, $settings).toFixed(2)})
      </span>
    {/if}
  </td>
  {#if !$settings.minimal_mode}
    <td>
      <div class="actions">
        {#if $settings.week_predictions}
          <button on:click={take_pred}>Take Suggestion</button>
        {/if}
        <button on:click={clear}>Clear</button>
        <!-- <Icon icon={DeleteIcon} /> -->
      </div>
    </td>
  {/if}
</tr>

<style lang="scss">
  .container {
    gap: 0.4rem;
    padding: 0.2rem;

    .weekday {
      text-align: left;
      width: 8rem;
    }

    .clock-time {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .hours {
      width: 6.5rem;
      text-align: center;

      .hours-prediction {
        color: var(--prediction-color);
      }
    }

    .actions {
      display: flex;
      gap: 0.5rem;
    }
  }

  input {
    width: 1rem;
    height: 1rem;
  }
</style>
