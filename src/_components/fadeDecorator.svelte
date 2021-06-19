<script>
  import { scale } from "svelte/transition";
</script>

<div transition:scale>
  <slot />
</div>
