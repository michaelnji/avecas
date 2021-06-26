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

    ::-webkit-scrollbar {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        @apply bg-accent rounded-full h-12 w-4;
    }
    ::-webkit-scrollbar-track {
        @apply bg-transparent;
    }
    * {
        @apply transition duration-200;
    }
</style>
