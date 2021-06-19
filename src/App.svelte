<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  // import "boxicons";
  import Serviceworker from "./Serviceworker.svelte";
</script>

<main class="overflow-hidden"><Router {routes} /></main>
<Serviceworker />

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
