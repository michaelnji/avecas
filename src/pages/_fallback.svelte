<script>
  import { url } from "@roxi/routify";
</script>

<div class="e404">
  <img src="../assets/img/404.png" class="w-full" alt="" />
  <div
    class="text-5xl md:text-7xl lg:text-8xl text-primary tracking-wide leading-loose my-12 font-bold"
  >
    OOPS!😫
  </div>
  <div class="big prose text-center w-full prose-xl">
    An error occurred! No qualms! we'll fix it right away <br />
    <!-- link to the parent folder of _fallback.svelte -->
    <a href={$url("../")}>Take me back -></a>
  </div>
</div>

<style>
  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>
