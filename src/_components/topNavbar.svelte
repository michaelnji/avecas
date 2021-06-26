<script>
    import Calendar from "./my-calendar.svelte";
    import ThemeToggle from "./themeToggle.svelte";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function pushEvent() {
        dispatch("requestTheme");
    }
</script>

<div
    class="flex justify-between items-center w-full fixed py-4 px-8 glass z-10 top-0 left-0 right-0"
>
    <h1 class="text-xl md:text-2xl lg:text-3xl text-primary font-extrabold">
        AVC
    </h1>
    <div>
        <div class="inline-flex items-center self-center">
            <ThemeToggle on:changeTheme={pushEvent} />
        </div>

        <Calendar />
    </div>
</div>
