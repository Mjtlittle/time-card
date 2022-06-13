<script lang="ts">
  import { settings } from "../lib/settings";
  import {
    Day,
    get_now,
    hours_between,
    is_today,
    live_day_hours,
    range_complete,
    range_has,
    range_has_end,
    range_has_start,
    range_hours,
    sum,
  } from "../lib/utility";

  export let days: Day[];

  interface Bar {
    classes?: string;
    value: number;
    label: string;
    round_right?: boolean;
    round_left?: boolean;
  }

  let bars: Bar[] = [
    { classes: "red", value: 50, label: "test" },
    { classes: "green", value: 20, label: "test" },
  ];
  let bar_value_total = 100;

  $: days, recompute_bars();

  const recompute_bar_total = () => {
    const { target_week_hours } = $settings;
    bar_value_total = bars.map(({ value }) => value).reduce(...sum);
    if (bar_value_total < target_week_hours)
      bar_value_total = target_week_hours;
  };

  const recompute_bars = () => {
    const { target_week_hours } = $settings;

    bars = [];

    // const live_hours = days
    //   .map((day) => live_day_hours(day, $settings))
    //   .reduce(...sum);

    let future = false;

    const add_day_bars = (day: Day) => {
      const pre_hours = range_hours(day.pre_clock, $settings);

      const live_hours = live_day_hours(day, $settings);
      const now = get_now();

      if (is_today(day)) future = true;

      if (range_has_start(day.clock) && is_today(day)) {
        let target_hours = pre_hours;
        if (range_has_end(day.clock))
          target_hours = range_hours(day.clock, $settings);

        const remaining = target_hours - live_hours;

        console.log({ remaining });
        bars.push({
          classes: "blue",
          value: live_hours,
          label: "day",
          round_right: remaining <= 0.001,
        });
        if (remaining > 0)
          bars.push({
            classes: "light-blue",
            value: remaining,
            label: "day",
            round_left: false,
          });
        return;
      }

      if (range_complete(day.clock))
        bars.push({
          classes: future ? "light-blue" : "blue",
          value: live_hours,
          label: "day",
        });
      else {
        bars.push({
          classes: "gray",
          value: pre_hours,
          label: "day",
        });
      }
    };

    days.forEach(add_day_bars);

    recompute_bar_total();
  };
</script>

<div class="container">
  <div class="full-bar">
    {#each bars as bar}
      <div
        style:width={`${(bar.value / bar_value_total) * 100}%`}
        class={bar.classes + " bar"}
        class:round-left={bar.round_left ?? true}
        class:round-right={bar.round_right ?? true}
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    padding: 0.2rem;
  }

  .blue {
    background: linear-gradient(
      0deg,
      rgba(0, 102, 182, 1) 0%,
      rgba(0, 155, 255, 1) 100%
    );
  }
  .light-blue {
    background: linear-gradient(
      0deg,
      rgb(154, 190, 217) 0%,
      rgb(176, 223, 255) 100%
    );
  }
  .yellow {
    background: linear-gradient(
      0deg,
      rgb(189, 189, 0) 0%,
      rgb(255, 255, 0) 100%
    );
  }

  .gray {
    background: linear-gradient(
      0deg,
      rgb(170, 170, 170) 0%,
      rgb(214, 214, 214) 100%
    );
  }

  .green {
    background-color: green;
  }

  .full-bar {
    width: 30rem;
    height: 1rem;
    display: flex;
    border-radius: 10000px;
    overflow: hidden;
    // border: 3px solid black;
    background-color: #ebebeb;
  }

  .bar {
    height: 100%;

    $border-radius: 5px;
    &.round-right {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &.round-left {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
  }
</style>
