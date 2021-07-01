<script>
    import { fly } from "svelte/transition";
</script>

<div in:fly={{x:-500, duration:1000}} out:fly={{x:500, duration:500}}>
    <slot />
</div>
