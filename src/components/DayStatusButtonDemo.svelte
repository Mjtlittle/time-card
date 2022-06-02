<script lang="ts">
  import DayStatusButton from "./DayStatusButton.svelte";
  import Toggle from "./Toggle.svelte";

  let value;
</script>

<Toggle label="❓">
  <div>
    <DayStatusButton bind:value />
    <strong>
      {#if value == 0}
        Worked
      {:else if value == 1}
        Unpaid Vacation
      {:else}
        Paid Vacation
      {/if}
    </strong>
  </div>

  <p>
    Click the icon above. Thoughts on this instead of checkbox for each day?
    Currently the disabling a day does not count its time.
  </p>

  <p>Also is the "Take Suggestion" button even useful?</p>
</Toggle>
