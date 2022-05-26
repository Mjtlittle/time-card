<script lang="ts">
  import { settings } from "../lib/settings";
  import { Day, work_weekdays } from "../lib/utility";
  import ConfirmButton from "./ConfirmButton.svelte";

  export let days: Day[];

  const clear = () => {
    days = work_weekdays.map((weekday) => ({
      weekday,
      clock: { start: null, end: null },
      pre_clock: { start: null, end: null },
      enabled: true,
    }));
  };

  const take_all_predictions = () => {
    days.forEach((day) => {
      day.clock = day.pre_clock;
    });
    days = days;
  };
</script>

{#if !$settings.minimal_mode}
  <div class="container">
    <ConfirmButton on_confirm={clear}>Clear All</ConfirmButton>
    {#if $settings.week_predictions}
      <ConfirmButton on_confirm={take_all_predictions}>
        Take All Suggestions
      </ConfirmButton>
    {/if}
  </div>
{/if}

<style lang="scss">
  .container {
    width: 40rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }
</style>
