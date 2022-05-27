<script lang="ts">
  import { settings } from "../lib/settings";
  import ConfirmButton from "./ConfirmButton.svelte";
  import TimeInput from "./TimeInput.svelte";
  import Toggle from "./Toggle.svelte";

  export let reset_app: () => void;
</script>

<Toggle label="Preferences">
  <table>
    <tbody>
      <tr>
        <td> Prefered Start Time: </td>
        <td>
          <TimeInput bind:value={$settings.usual_start_time} />
        </td>
      </tr>
      <tr>
        <td>Target Weekly Hours:</td>
        <td>
          <input
            class="input"
            type="number"
            bind:value={$settings.target_week_hours}
          />
        </td>
      </tr>
      <tr>
        <td>Lunch Duration (minutes):</td>
        <td>
          <input
            class="input"
            type="number"
            bind:value={$settings.lunch_minutes}
          />
        </td>
      </tr>
      <tr>
        <td>Overtime Threshold (hours):</td>
        <td>
          <input
            class="input"
            type="number"
            bind:value={$settings.overtime_hours}
          />
        </td>
      </tr>
      <tr>
        <td>Hourly Pay ($):</td>
        <td>
          <input
            class="input"
            type="number"
            bind:value={$settings.hourly_pay_rate}
          />
        </td>
      </tr>
      <tr>
        <td>Tax Rate:</td>
        <td>
          <input class="input" type="number" bind:value={$settings.tax_rate} />
        </td>
      </tr>
      <tr>
        <td>Overtime Rate:</td>
        <td>
          <input
            class="input"
            type="number"
            bind:value={$settings.overtime_pay_rate}
          />
        </td>
      </tr>
      <tr>
        <td>Show Pay:</td>
        <td>
          <input class="" type="checkbox" bind:checked={$settings.show_pay} />
        </td>
      </tr>
      <tr>
        <td>Show Suggestions:</td>
        <td>
          <input
            class=""
            type="checkbox"
            bind:checked={$settings.week_predictions}
          />
        </td>
      </tr>
      <tr>
        <td>Minimal Mode:</td>
        <td>
          <input
            class=""
            type="checkbox"
            bind:checked={$settings.minimal_mode}
          />
        </td>
      </tr>
      <tr>
        <td>Reset App:</td>
        <td>
          <ConfirmButton on_confirm={reset_app}>
            Delete Everything
          </ConfirmButton>
        </td>
      </tr>
    </tbody>
  </table>
</Toggle>

<style lang="scss">
  tr td:first-of-type {
    padding-right: 2rem;
  }
</style>
