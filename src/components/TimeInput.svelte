<script lang="ts">
  import { settings } from "../lib/settings";
  import { format_time, OptionalTime, parse_time } from "../lib/utility";

  export let value: OptionalTime = null;
  export let disabled: boolean = false;
  export let shadow_time: OptionalTime = null;
  export let show_shadow: boolean = true;

  type State = "passed" | "inprogress" | "future";

  let state: State = "future";

  let shadow_time_text = "";
  $: shadow_time_text =
    shadow_time == null || !show_shadow ? "-- : --" : format_time(shadow_time);

  $: populate(value);

  const validate_input = () => {
    const result = parse_time(input_value);
    populate(result);
    value = result;
  };

  const populate = (time: OptionalTime) => {
    if (time === null) {
      input_value = "";
      return;
    }
    const time_string = format_time(time);
    input_value = time_string;
  };

  const handle_keypress = (event: KeyboardEvent) => {
    if (event.code === "Enter") validate_input();
  };

  const select_all = () => {
    input_element.select();
  };

  const clear = () => {
    value = null;
  };

  let input_element;
  let input_value;
</script>

<input
  type="text"
  class:green={state == "passed"}
  class:yellow={state == "inprogress"}
  bind:this={input_element}
  bind:value={input_value}
  on:focusout={validate_input}
  on:keyup={handle_keypress}
  on:focus={select_all}
  placeholder={shadow_time_text}
  {disabled}
/>

{#if !$settings.minimal_mode}
  <button on:click={clear} {disabled}>x</button>
{/if}

<style lang="scss">
  input {
    &::placeholder {
      color: var(--prediction-color);
    }
    width: 5rem;
  }

  .green {
    background-color: rgb(62, 130, 62);
    color: white;

    &:placeholder-shown {
      background-color: rgb(174, 234, 174);
    }

    &::placeholder {
      color: rgb(61, 61, 61);
    }
  }
</style>
