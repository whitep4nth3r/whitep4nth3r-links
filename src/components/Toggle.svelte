<script>
  import { toggle } from "../data/store.js"

  export let show = "cards";
</script>



{#if show === $toggle}
<button on:click={() => toggle.set($toggle === "readme" ? "cards" : "readme")}>Switch view</button>
  <slot />
{/if}