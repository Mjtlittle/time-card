<script lang="ts">
  import type { Time } from "../lib/utility";

  export let value: Time = undefined;
  let input_value = undefined;

  const format_time = ([hour, minute]: Time) => {
    const hour_string = String(hour).padStart(2, "0");
    const minute_string = String(minute).padStart(2, "0");
    return `${hour_string}:${minute_string}`;
  };

  $: {
    if (value != undefined) input_value = format_time(value);
    else input_value = "";
  }

  const update_value = (event) => {
    input_value = event.target.value;

    if (input_value == "") value = null;
    else value = input_value.split(":").map((n) => parseInt(n));
  };
</script>

<input class="input" type="time" value={input_value} on:change={update_value} />

<style lang="scss">
  input {
    width: 7rem;
  }
</style>
