<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  import About from "./components/About.svelte";
  import ActionBar from "./components/ActionBar.svelte";
  import DayInput from "./components/DayInput.svelte";
  import DayProgress from "./components/DayProgress.svelte";
  import DayStatusButtonDemo from "./components/DayStatusButtonDemo.svelte";
  import Information from "./components/Information.svelte";
  import Preferences from "./components/Preferences.svelte";
  import { default_settings, settings } from "./lib/settings";
  import {
    data_localstorage_key,
    Day,
    predict_week,
    work_weekdays,
  } from "./lib/utility";
  import "./styles/global.scss";

  let days: Day[] = work_weekdays.map((weekday) => ({
    weekday,
    clock: { start: null, end: null },
    pre_clock: { start: null, end: null },
    enabled: true,
  }));

  $: predict_week(days, $settings), (days = [...days]);

  const save = () => {
    const data = {
      days,
      settings: $settings,
    };
    localStorage.setItem(data_localstorage_key, JSON.stringify(data));
  };

  const restore_defaults = () => {
    console.warn("RESTORED DEFAULTS");
    $settings = default_settings;
    days = work_weekdays.map((weekday) => ({
      weekday,
      clock: { start: null, end: null },
      pre_clock: { start: null, end: null },
      enabled: true,
    }));
    save();
  };

  const load = () => {
    // try pulling the local storage
    const data_string = localStorage.getItem(data_localstorage_key);
    if (data_string == null) {
      restore_defaults();
      return;
    }

    // try parsing the data from localstore
    try {
      const data = JSON.parse(data_string);
      days = data.days;
      $settings = { ...default_settings, ...data.settings };
      save();
    } catch (e) {
      restore_defaults();
    }

    // try hitting all possible vars
    try {
      if (
        days
          .map((day) => [
            day.clock.start,
            day.clock.end,
            day.pre_clock.start,
            day.pre_clock.end,
            day.enabled,
            day.weekday,
          ])
          .reduce((acc, v) => [...acc, ...v], [])
          .some((v) => v === undefined)
      )
        restore_defaults();
    } catch (e) {
      restore_defaults();
    }
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
  <div class="header">
    <h1>
      <a href="https://github.com/Mjtlittle/time-card" class="secret">
        🕰️ Time Card
      </a>
    </h1>
    <span>
      Made by
      <a href="https://github.com/Mjtlittle">Joshua Little</a>
    </span>
  </div>

  <Information bind:days />
  <DayProgress bind:days />

  <div class="table">
    <table>
      <thead>
        <th class="weekday">Weekday</th>
        {#if !$settings.minimal_mode}
          <th />
        {/if}
        <th>Clock-in</th>
        <th>Clock-out</th>
        <th>Hours</th>
        {#if !$settings.minimal_mode}
          <th />
        {/if}
      </thead>
      <tbody>
        {#each days as day}
          <DayInput bind:day />
        {/each}
      </tbody>
    </table>

    <ActionBar bind:days />
  </div>

  <div class="toggles">
    <Preferences {reset_app} />
    <About />
    <DayStatusButtonDemo />
  </div>

  <div class="space" />
</div>

<style lang="scss">
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-bottom: 0;
    }

    a.secret {
      text-decoration: none;
      color: inherit;
      &:hover {
        color: inherit;
      }
      &:active {
        color: inherit;
      }
    }

    a {
      text-decoration: none;
      font-weight: bold;
      color: rgb(49, 49, 49);
      &:hover {
        color: var(--hover-color);
      }
      &:active {
        color: var(--active-color);
      }
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    .weekday {
      text-align: left;
    }
  }

  .toggles {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .table {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  .space {
    height: 3rem;
  }
</style>
