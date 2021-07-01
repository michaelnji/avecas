<script>
    import EventEditor from "./../../_components/EventEditor.svelte";
    import EmptyEvents from "./../../_components/EmptyEvents.svelte";
</script>

<EventEditor />
<div class=" h-full overflow-hidden">
    <div class="grid place-items-center mt-12 h-full">
        <h1 class="text-3xl font-extrabold text-center text-opacity-10 mb-6">
            No Events. Let's create one!
        </h1>
        <div class="lg:w-4/12 md:w-6/12  w-10/12 mx-auto ">
            <EmptyEvents />
        </div>
    </div>
</div>
