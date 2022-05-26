<script lang="ts">
  import { settings } from "../lib/settings";
  import { Day, live_day_hours, sum } from "../lib/utility";

  export let days: Day[];

  interface Bar {
    classes?: string;
    percent: number;
    label: string;
  }

  let bars: Bar[] = [
    { classes: "red", percent: 50, label: "test" },
    { classes: "green", percent: 20, label: "test" },
  ];

  $: days, recompute_bars();

  const recompute_bars = () => {
    const { target_week_hours } = $settings;

    bars = [];

    const live_hours = days
      .map((day) => live_day_hours(day, $settings))
      .reduce(...sum);

    const week_percent_complete = (live_hours / target_week_hours) * 100;

    bars.push({
      classes: "blue",
      percent: week_percent_complete,
      label: "Complete",
    });
  };
</script>

<div class="container">
  <div class="full-bar">
    {#each bars as bar}
      <div style:width={`${bar.percent}%`} class={bar.classes + " bar"} />
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
    // border-right: 3px solid black;
    border-radius: 3px;
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
  }
</style>
