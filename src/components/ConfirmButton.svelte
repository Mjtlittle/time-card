<script lang="ts">
  let confirming = false;
  export let on_confirm: () => void = () => {};

  let timeout = null;
  const handle_click = () => {
    if (!confirming) {
      confirming = true;
      timeout = setTimeout(() => (confirming = false), 2000);
      return;
    }

    clearTimeout(timeout);
    on_confirm();
    confirming = false;
  };
</script>

<button on:click={handle_click}>
  <span class:hidden={confirming}>
    <slot />
  </span>
  {#if confirming}
    <span class="confirmation">Are you sure?</span>
  {/if}
</button>

<style lang="scss">
  button {
    position: relative;
  }
  .hidden {
    opacity: 0;
  }

  .confirmation {
    position: absolute;
    left: 0;
    top: 1px;
    width: 100%;
    height: 100%;
    text-align: center;
  }
</style>
