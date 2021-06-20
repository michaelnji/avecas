<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  // import Serviceworker from "./Serviceworker.svelte";
  // import "boxicons";
</script>

<main data-theme="desolate" class="overflow-hidden"><Router {routes} /></main>

<!-- <Serviceworker /> -->
<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
