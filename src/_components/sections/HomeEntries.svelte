<script>
    import Empty from "./../Empty.svelte";
    import SimpleCard from "../simpleCard.svelte";
    import {fly} from 'svelte/transition';
import { flip } from "svelte/animate";
   
    export let entries;
    
</script>

{#if entries.length > 0}
    <div class="artboard">
        <div class="grid lg:grid-cols-2 grid-cols-1">
            {#each entries as entry (entry.id)}
            <div animate:flip={{duration:1000}} out:fly={{x:-500, duration:1000}}>
                <SimpleCard 
                    title={entry.title}
                    desc={entry.desc}
                    tags={entry.tags}
                    date={entry.date}
                    hideContent={true}
                    mood={entry.mood}
                    id={entry.id}
                /></div>
            {/each}
        </div>
    </div>
{:else}
    <h1 class="text-3xl mt-3 font-semibold text-opacity-50">No New Entries</h1>
    <Empty />
{/if}
