<script>
	import Serviceworker from './Serviceworker.svelte';
    import { Router } from "@roxi/routify";
    import { routes } from "../.routify/routes";
    import Notifications from "svelte-notifications";

</script>

<Notifications>
    <div id='main' class="overflow-hidden">
       
        <Router {routes} /></div>
</Notifications>
<Serviceworker />

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
/* body{
    overflow-y: hidden ;
} */
     ::-webkit-scrollbar {
        background: transparent !important;
        width: 10px !important;
        position: fixed;
    }
     ::-webkit-scrollbar-button {
        background: transparent !important;
        width: 0 !important;
    }
     ::-webkit-scrollbar-track {
         background: rgba(65, 100, 255, 0) !important;
       opacity: 0 !important; 
        /* width: 0 !important; */
        width: 100%;
       
    }
    
     ::-webkit-scrollbar-thumb {
        @apply bg-primary;
        width: 100% !important;
    }
   
</style>
