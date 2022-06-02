<script lang="ts">
  export let label: string = "PLACEHOLDER";
</script>

<details>
  <summary>{label}</summary>
  <div class="content">
    <slot />
  </div>
</details>

<style lang="scss">
  details {
    width: 35rem;
  }
  summary {
    margin-bottom: 0.2rem;
    user-select: none;
    cursor: pointer;
  }

  .content {
    border-left: rgba($color: #000000, $alpha: 0.2) 2px solid;
    padding-left: 1rem;
    margin-left: 4px;
    padding-top: 5px;
  }
</style>
