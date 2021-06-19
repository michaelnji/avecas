<script>
  import { url } from "@roxi/routify";
</script>

<div class="e404">
  <div class="huge text-primary">404</div>
  <div class="big">
    Page not found.
    <!-- link to the parent folder of _fallback.svelte -->
    <a href={$url("../")}>Go back</a>
  </div>
</div>

<style>
  .huge {
    font-size: 12rem;
  }
  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>
