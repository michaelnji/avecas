<script>
    import Empty from "./../_components/Empty.svelte";
    import HomeStats from "./../_components/sections/HomeStats.svelte";
    import HomeTodoEntries from "./../_components/sections/HomeTodoEntries.svelte";
    import Badge from "./../_components/badge.svelte";
    import { isActive, metatags } from "@roxi/routify";
    import entries from "../store/entries";
    import todos from "../store/todos";
    import { onDestroy, onMount } from "svelte";
    import dbManager from "../scripts/dbManager";
    import SimpleCard from "../_components/simpleCard.svelte";
    let Entries, recentEntries, unsubscribe, todoUnsubscribe, Todos;
    unsubscribe = entries.subscribe((value) => {
        Entries = value;
    });

    todoUnsubscribe = todos.subscribe((value) => {
        Todos = value;
    });

    onMount(() => {
        entries.update((value) => {
            return dbManager.getOrSetItem("AVECAS_ENTRIES", []);
        });
        todos.update((value) => {
            return dbManager.getOrSetItem("AVECAS_TODOS", []);
        });
    });

    onDestroy(() => {
        unsubscribe;
        todoUnsubscribe;
    });
    metatags.title = "Avecas";
    metatags.description = "A personalised diary App";
</script>

{#if $isActive("./index")}
    <main class=" px-6 py-8  w-screen relative">
        <!-- <Alert type="success" closable>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
             sapiente cupiditate veniam.</Alert
         > -->
        <div class="flex flex-wrap w-full justify-between">
            <div class="w-full md:w-11/12 md:mx-auto lg:w-6/12">
                <h1 class="font-extrabold text-4xl mb-3 text-base-content">
                    Entries {#if Entries}
                        <Badge size="md" type="info" closable={false}
                            >{Entries.length > 3 ? 3 : Entries.length} recent</Badge
                        >
                    {/if}
                </h1>
                {#if Entries && Entries.length > 0}
                    <div class="artboard">
                        <div class="grid  grid-cols-1">
                            {#each Entries as entry, i}
                                {#if i < 3}
                                    <SimpleCard
                                        title={entry.title}
                                        desc={entry.desc}
                                        tags={entry.tags}
                                        date={entry.date}
                                        mood={entry.mood}
                                        hideContent={false}
                                        id={entry.id}
                                    />
                                {/if}
                            {/each}
                        </div>
                    </div>
                {:else}
                    <h1 class="text-3xl mt-3 font-semibold text-opacity-50">
                        No New Entries
                    </h1>
                    <Empty />
                {/if}
            </div>
            <div class="w-full md:w-11/12 md:mx-auto lg:w-5/12 my-12 lg:my-0">
                <div class="mb-7">
                    <h1 class="font-extrabold text-4xl mb-3">
                        TODOS {#if Todos}
                            <Badge size="md" type="info" closable={false}
                                >{Todos.filter((e) => e.isChecked !== true)
                                    .length} pending</Badge
                            >
                        {/if}
                    </h1>
                    {#if Todos}
                        <HomeTodoEntries todos={Todos} />
                    {/if}
                </div>
                <div>
                    <h1 class="font-extrabold text-4xl mb-3">Stats</h1>
                    <HomeStats />
                </div>
            </div>
        </div>
    </main>
{:else}
    <br />
{/if}
