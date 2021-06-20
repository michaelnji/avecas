<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import Serviceworker from "./Serviceworker.svelte";
</script>

<div class="overflow-hidden"><Router {routes} /></div>

<Serviceworker />

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
