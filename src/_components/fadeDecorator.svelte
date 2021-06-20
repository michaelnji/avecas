<script>
  import { scale, fly } from "svelte/transition";
</script>

<div in:scale out:fly>
  <slot />
</div>
