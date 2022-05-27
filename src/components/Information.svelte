<script lang="ts">
  import { onDestroy } from "svelte";
  import { noop } from "svelte/internal";

  import { settings } from "../lib/settings";
  import {
    clock_complete,
    Day,
    get_now,
    hours_between,
    is_today,
    live_day_hours,
    range_has,
    range_hours,
    sum,
  } from "../lib/utility";

  export let days: Day[];

  interface Stat {
    label: string;
    value: string;
    pre_value: string;
  }

  type StatGroup = Stat[];

  let groups: StatGroup[] = [
    [
      { label: "Paid Hours", value: "1", pre_value: "" },
      { label: "Paid Hours", value: "2", pre_value: "" },
      { label: "Paid Hours", value: "3", pre_value: "" },
    ],
    [
      { label: "Paid Hours", value: "1", pre_value: "" },
      { label: "Paid Hours", value: "2", pre_value: "" },
      { label: "Paid Hours", value: "3", pre_value: "" },
    ],
  ];

  $: days, recompute_stats();
  const recompute_stats = () => {
    const {
      overtime_hours,
      hourly_pay_rate,
      overtime_pay_rate,
      tax_rate,
      show_pay,
    } = $settings;

    groups = [];

    const enabled_days = days.filter(({ enabled }) => enabled);

    const live_hours = days
      .map((day) => live_day_hours(day, $settings))
      .reduce(...sum);

    const pre_hours = enabled_days
      .map((day) => range_hours(day.pre_clock, $settings))
      .reduce(...sum);

    const base_hours = Math.min(overtime_hours, live_hours);

    const pre_base_hours = Math.min(overtime_hours, pre_hours);

    const ot_hours =
      live_hours > overtime_hours ? live_hours - overtime_hours : 0;

    const pre_ot_hours =
      pre_hours > overtime_hours ? pre_hours - overtime_hours : 0;

    const total_hours = enabled_days
      .map((day) => {
        const { clock } = day;
        if (clock_complete(clock)) return hours_between(clock.start, clock.end);
        if (range_has(clock, true, false) && is_today(day))
          return hours_between(clock.start, get_now());
        else return 0;
      })
      .reduce(...sum);

    const pre_total_hours = enabled_days
      .map(({ pre_clock }) => hours_between(pre_clock.start, pre_clock.end))
      .reduce(...sum);

    const time_group: StatGroup = [
      {
        label: "Paid Hours",
        value: live_hours.toFixed(2),
        pre_value: pre_hours.toFixed(2),
      },
      {
        label: "Base",
        value: base_hours.toFixed(2),
        pre_value: pre_base_hours.toFixed(2),
      },
      {
        label: "Overtime",
        value: ot_hours.toFixed(2),
        pre_value: pre_ot_hours.toFixed(2),
      },
      {
        label: "Total Hours",
        value: total_hours.toFixed(2),
        pre_value: pre_total_hours.toFixed(2),
      },
    ];

    groups.push(time_group);

    if (!show_pay) return;

    const base_pay = base_hours * hourly_pay_rate;
    const pre_base_pay = pre_base_hours * hourly_pay_rate;

    const ot_pay = ot_hours * hourly_pay_rate * overtime_pay_rate;
    const pre_ot_pay = pre_ot_hours * hourly_pay_rate * overtime_pay_rate;

    const total_pay = base_pay + ot_pay;
    const pre_total_pay = pre_base_pay + pre_ot_pay;

    const tax_duct = total_pay * tax_rate;
    const pre_tax_duct = pre_total_pay * tax_rate;

    const pay_group: StatGroup = [
      {
        label: "Pay",
        value: `${(total_pay - tax_duct).toFixed(2)}$`,
        pre_value: `${(pre_total_pay - pre_tax_duct).toFixed(2)}$`,
      },
      {
        label: "Base",
        value: `${base_pay.toFixed(2)}$`,
        pre_value: `${pre_base_pay.toFixed(2)}$`,
      },
      {
        label: "Overtime",
        value: `${ot_pay.toFixed(2)}$`,
        pre_value: `${pre_ot_pay.toFixed(2)}$`,
      },
      {
        label: "Taxes",
        value: `${tax_duct.toFixed(2)}$`,
        pre_value: `${pre_tax_duct.toFixed(2)}$`,
      },
    ];

    groups.push(pay_group);
  };

  const recomp_interval = setInterval(recompute_stats, 10_000);
  onDestroy(() => clearInterval(recomp_interval));
</script>

<div class="container">
  {#each groups as stats}
    <table class="stat-box">
      <tr>
        <td colspan={2} class="label">{stats[0].label}:</td>
        <td class="value">
          {stats[0].value}
          {#if $settings.week_predictions}
            <span class="pre-value">
              ({stats[0].pre_value})
            </span>
          {/if}
        </td>
      </tr>
      {#if !$settings.minimal_mode}
        {#each stats.slice(1) as stat}
          <tr>
            <td class="blank" />
            <td class="label">{stat.label}: </td>
            <td>
              {stat.value}
              {#if $settings.week_predictions}
                <span class="pre-value">
                  ({stat.pre_value})
                </span>
              {/if}
            </td>
          </tr>
        {/each}
      {/if}
    </table>
  {/each}
</div>

<style lang="scss">
  .container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .stat-box {
    // min-width: 20rem;
  }

  .pre-value {
    color: var(--prediction-color);
  }

  tr {
    height: 1rem;

    .blank {
      width: 2rem;
    }

    .label {
      padding-right: 1rem;
      font-weight: bold;
    }
  }
</style>
