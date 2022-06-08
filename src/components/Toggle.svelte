<script>
  import { toggle } from "../data/store.js"
  export let show = "cards";
</script>

{#if show === $toggle}
<button on:click={() => toggle.set($toggle === "readme" ? "cards" : "readme")}>{$toggle === "cards" ? "Show GitHub README" : "Show link cards"}</button>
  <slot />
{/if}

<style>
  button {
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.67rem 2.5rem;
    height: 100%;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.4rem;
    border-width: 0;
    font-weight: bold;
    border-radius: 0.25rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  button:focus {
    outline: transparent;
    outline-style: solid;
    box-shadow: #ffffff 0 0 0 0.125rem, #ffb626 0 0 0 0.375rem;
    transition: box-shadow 0.2s ease-in-out;
    border-radius: 0.25rem;
  }
</style>