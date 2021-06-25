<script>
    import HomeTodoEntries from "./../../_components/sections/HomeTodoEntries.svelte";
    import EmptyNotification from "./../../_components/EmptyNotification.svelte";
    import { fade } from "svelte/transition";
    import HomeEntries from "./../../_components/sections/HomeEntries.svelte";
    import Empty from "./../../_components/Empty.svelte";
    import Editor from "./../../_components/Editor.svelte";
    import entries from "../../store/entries";
    import { onDestroy, onMount } from "svelte";
    import todos from "../../store/todos";
    let Entries, unsubscribe, activeTab, Todos, todoUnsubscribe;
    activeTab = 0;
    function tabbed() {
        if (activeTab == 0) {
            activeTab = 1;
        } else {
            activeTab = 0;
        }
    }
    onMount(() => {
        unsubscribe = entries.subscribe((value) => {
            Entries = value;
        });
        todoUnsubscribe = todos.subscribe((value) => {
            Todos = value;
        });
    });
    onDestroy(() => {
        unsubscribe;
    });
</script>

<Editor tab={activeTab} />
<div class="tabs tabs-boxed ml-4  mb-6 w-full">
    <div
        class:tab-active={activeTab === 0}
        class:text-primary-focus={activeTab === 0}
        class="tab text-xl font-medium "
        on:click={tabbed}
    >
        Entries
    </div>
    <div
        class:tab-active={activeTab !== 0}
        class="tab  text-xl font-medium "
        on:click={tabbed}
    >
        Todos
    </div>
</div>
{#if activeTab == 0}
    {#if Entries && Entries.length == 0}
        <div out:fade class="w-full h-full fixed md:relative top-44 md:top-10">
            <h1
                class="text-3xl font-extrabold text-center text-opacity-10 mb-12"
            >
                Empty. Try adding something❤️
            </h1>
            <div class="lg:w-4/12 md:w-6/12  w-10/12 mx-auto">
                <Empty />
            </div>
        </div>
    {:else if Entries}
        <div class="mb-12" out:fade><HomeEntries entries={Entries} /></div>
    {:else}
        <br />
    {/if}
{:else if Todos && Todos.length == 0}
    <div out:fade class="w-full h-full fixed md:relative top-44 md:top-10">
        <h1 class="text-3xl font-extrabold text-center text-opacity-10 mb-12">
            No tasks for the moment❤️
        </h1>
        <div class="lg:w-4/12 md:w-6/12  w-10/12 mx-auto">
            <EmptyNotification />
        </div>
    </div>
{:else if Todos}
    <div class="mb-12" out:fade><HomeTodoEntries todos={Todos} /></div>
{:else}
    <br />
{/if}
