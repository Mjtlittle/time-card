<script lang="ts">
  export let icon;
  export let color = "black";
  export let size = "1rem";
</script>

<button class="container" on:click style:font-size={size}>
  <svelte:component this={icon} class="icon" {color} />
</button>

<style lang="scss">
  button {
    border: 0;
    background: none;
    font-size: 1em;
    margin-top: 3px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.4;
    }
  }
</style>
