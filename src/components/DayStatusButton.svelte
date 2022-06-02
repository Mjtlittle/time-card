<script lang="ts">
  import NoIcon from "~icons/fa-solid/ban";
  import CheckIcon from "~icons/fa-solid/check";
  import VacationIcon from "~icons/fa-solid/umbrella-beach";

  import IconButton from "./IconButton.svelte";

  export let value = 0;

  const states = [
    {
      value: 1,
      icon: CheckIcon,
      color: "rgb(5 150 105)",
    },
    {
      value: 2,
      icon: NoIcon,
      color: "rgb(225 29 72)",
    },
    {
      value: 3,
      icon: VacationIcon,
      color: "rgb(37 99 235)",
    },
  ];

  let current_state = 0;
  let icon, color;
  $: icon = states[current_state].icon;
  $: color = states[current_state].color;

  const cycle = () => {
    current_state += 1;
    current_state %= states.length;
    value = current_state;
  };
</script>

<!-- <button on:click={cycle} style:background-color={color} style:color="white">
    {text}
</button> -->

<IconButton {icon} on:click={cycle} {color} size="1rem" />
