<script lang="ts">
  import {
    lunch_minutes,
    target_week_hours,
    usual_start_time,
    hourly_pay_rate,
    overtime_pay_rate,
    show_pay,
  } from "../lib/work_context";
  import ConfirmButton from "./ConfirmButton.svelte";
  import TimeInput from "./TimeInput.svelte";

  export let reset_app: () => void;
</script>

<details>
  <summary>Preferences</summary>
  <table>
    <tbody>
      <tr>
        <td> Prefered Start Time: </td>
        <td>
          <TimeInput bind:value={$usual_start_time} />
        </td>
      </tr>
      <tr>
        <td>Lunch Duration (minutes):</td>
        <td>
          <input class="input" type="number" bind:value={$lunch_minutes} />
        </td>
      </tr>
      <tr>
        <td>Target Weekly Hours:</td>
        <td>
          <input class="input" type="number" bind:value={$target_week_hours} />
        </td>
      </tr>
      <tr>
        <td>Hourly Pay ($):</td>
        <td>
          <input class="input" type="number" bind:value={$hourly_pay_rate} />
        </td>
      </tr>
      <tr>
        <td>Overtime Rate:</td>
        <td>
          <input class="input" type="number" bind:value={$overtime_pay_rate} />
        </td>
      </tr>
      <tr>
        <td>Show Pay:</td>
        <td><input class="" type="checkbox" bind:checked={$show_pay} /></td>
      </tr>
      <tr>
        <td>Reset App:</td>
        <td>
          <ConfirmButton on_confirm={reset_app}>
            Delete all settings
          </ConfirmButton>
        </td>
      </tr>
    </tbody>
  </table>
</details>

<style lang="scss">
  summary {
    margin-bottom: 0.2rem;
  }

  table {
    border-left: rgba($color: #000000, $alpha: 0.2) 2px solid;
    padding-left: 1rem;
    margin-left: 4px;
    padding-top: 5px;
  }

  tr td:first-of-type {
    padding-right: 1rem;
  }
</style>
