<script>
    import Empty from "./../Empty.svelte";
    import SimpleCard from "../simpleCard.svelte";
    export let entries;
</script>

{#if entries.length !== 0}
    <div class="artboard">
        <div class="grid lg:grid-cols-2 grid-cols-1">
            {#each entries as entry}
                <SimpleCard
                    title={entry.title}
                    desc={entry.desc}
                    tags={entry.tags}
                    date={entry.date}
                    mood={entry.mood}
                />
            {/each}
        </div>
    </div>
{:else}
    <h1 class="text-3xl mt-3 font-semibold text-opacity-50">No New Entries</h1>
    <Empty />
{/if}
