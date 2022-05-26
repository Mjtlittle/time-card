<script lang="ts">
  import { onDestroy } from "svelte";

  import TimeInput from ".../TimeInput.svelte";
  import { lunch_minutes } from "../../../lib/settings";
  import {
    add_hours,
    ClockedDay,
    live_day_hours,
    make_day,
  } from "../../../lib/utility";

  export let day: ClockedDay;
  export let weekday: string = "Unknown";

  let live_hours = 0;
  $: day, $lunch_minutes, recompute_hours();

  const recompute_hours = () => {
    live_hours = live_day_hours(day);
  };
  const hourcomp_interval = setInterval(recompute_hours, 5000);
  onDestroy(() => clearInterval(hourcomp_interval));

  const make_target = () => {
    day = make_day(day, 8);
  };

  const add_15_min = () => {
    if (!day.end) return;
    day.end = add_hours(day.end, 15 / 60);
  };

  const clear = () => {
    day.start = undefined;
    day.end = undefined;
  };
</script>

<tr class:yellow={day.start && !day.end} class:green={day.start && day.end}>
  <td class="weekday">
    {weekday}
  </td>

  <td>
    <TimeInput bind:value={day.start} />
  </td>
  <td>
    <TimeInput bind:value={day.end} />
  </td>
  <td class="hours">
    {#if day.start}
      {live_hours.toFixed(2)}
    {:else}
      -.--
    {/if}
  </td>
  <td>
    <button class="button is-info is-light" on:click={make_target}>
      Make 8hrs
    </button>
    <button class="button is-success is-light" on:click={add_15_min}>
      + 15min
    </button>
    <!-- <button on:click={half_day}>1/2 Day</button> -->
    <button class="button is-danger is-light" on:click={clear}>Clear</button>
  </td>
</tr>

<!-- <TimeInput bind:value={day[0]} /> -->
<style lang="scss">
  td {
    padding: 0.2rem;
    // border: black 1px solid;

    border-radius: 4px;

    &.hours {
      text-align: center;
      vertical-align: middle;
    }

    &.weekday {
      text-align: right;
      vertical-align: middle;
      padding-left: 20px;
    }
  }

  .yellow {
    background-color: rgba($color: rgb(255, 223, 64), $alpha: 0.4);
  }
  .green {
    background-color: rgba($color: rgb(123, 224, 45), $alpha: 0.4);
  }
  .blue {
    background-color: rgba($color: rgb(45, 179, 224), $alpha: 0.4);
  }
</style>
