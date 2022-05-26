<script lang="ts">
  export let icon;
</script>

<button class="container">
  <svelte:component this={icon} class="icon" />
</button>

<style lang="scss">
  button {
    border: 0;
    background: none;
    font-size: 0.9rem;
    margin-top: 3px;
    cursor: pointer;

    &:hover {
      color: var(--hover-color);
    }

    &:active {
      color: var(--active-color);
    }
  }
</style>
