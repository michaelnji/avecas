<script>
  import { fade } from "svelte/transition";
</script>

<div transition:fade>
  <slot />
</div>
