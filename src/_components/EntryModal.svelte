<script>
    import { fade } from "svelte/transition";
    import Icon from "./icon.svelte";
    import entries from "../store/entries";
    import { onDestroy, onMount } from "svelte";
    import timeFunctions from "../scripts/timeFunctions";
    import dbM from "../scripts/dbManager";
    import { getNotificationsContext } from "svelte-notifications";
    import tp from "../scripts/tagsParser";

    export let id;
    const { addNotification } = getNotificationsContext();
    let closedClass,
        Entries,
        Desc,
        Title,
        Tags,
        Mood,
        newEntry,
        newEntries,
        currentEntry;

    closedClass = false;
    function openEditor() {
        closedClass = true;
    }
    function changeMood(e) {
        Mood = e.target.innerText;
    }
    function closeEditor() {
        closedClass = false;
    }

    function updateEntry() {
        newEntries = [];
        Entries.forEach((entry) => {
            if (entry.id !== id) {
                newEntries.push(entry);
            } else {
                currentEntry = entry;
            }
        });
        newEntry = {
            title: Title,
            desc: Desc,
            tags: tp.formatTags(Tags),
            id: id,
            date: timeFunctions.today(),
            mood: Mood,
        };

        entries.update((value) => {
            return [newEntry, ...newEntries];
        });

        dbM.setItemValue("AVECAS_ENTRIES", Entries);
        closeEditor();
        addNotification({
            text: "Entry updated",
            position: "bottom-right",
            type: "success",
            removeAfter: 2000,
        });
    }
    function deleteEntry() {
        newEntries = [];
        Entries.forEach((entry) => {
            if (entry.id !== id) {
                newEntries.push(entry);
            }
        });

        entries.update((value) => {
            return [...newEntries];
        });

        dbM.setItemValue("AVECAS_ENTRIES", Entries);
        closeEditor();
        addNotification({
            text: "Entry deleted",
            position: "bottom-right",
            type: "danger",
            removeAfter: 2000,
        });
    }

    const unsubscribe = entries.subscribe((value) => {
        Entries = value;
    });

    onMount(() => {
        entries.update((value) => {
            return dbM.getItemValue("AVECAS_ENTRIES");
        });
        newEntries = [];
        Entries.forEach((entry) => {
            if (entry.id !== id) {
                newEntries.push(entry);
            } else {
                currentEntry = entry;
            }
        });
        Tags = tp.arrayToString(currentEntry.tags);
        console.log(Tags);
        Mood = currentEntry.mood;
        Title = currentEntry.title;
        Desc = currentEntry.desc;
    });
    onDestroy(() => {
        unsubscribe;
    });
</script>

<div class="dropdown dropdown-hover hover">
    <button class="btn btn-ghost">
        <Icon name="dots-horizontal" inButton />
    </button>
    <div class="dropdown-content">
        <ul class="menu py-2 bg-base-200 shadow-lg w-24 transition-all ">
            <li>
                <button
                    class="w-full btn hover:text-primary btn-ghost"
                    on:click={openEditor}>edit</button
                >
            </li>
            <li>
                <button
                    class="w-full hover:text-primary btn btn-ghost"
                    on:click={deleteEntry}>delete</button
                >
            </li>
        </ul>
    </div>
</div>
{#if closedClass}
    <div
        class="w-screen h-screen hero-overlay left-0 fixed top-0 overflow-scroll grid place-items-center z-50"
        transition:fade
    >
        <div
            class="border mockup-window border-base-300 w-11/12 lg:w-5/12  mx-auto bg-base-100 my-auto z-50 overflow-visible"
        >
            <button
                class="btn absolute top-3 right-3 btn-ghost btn-sm "
                on:click={closeEditor}><Icon name="x" /></button
            >
            <div class=" px-4  py-8 border-t border-base-300">
                <div>
                    <h1 class="font-bold text-3xl py-5 ">Update Entry</h1>
                    <div class="form-control">
                        <label class="label" for="title">
                            <span class="label-text text-primary">Title</span>
                        </label>
                        <input
                            bind:value={Title}
                            placeholder="Happy Day "
                            class="input input-bordered"
                            type="text"
                        />
                    </div>
                    <div class="form-control mt-4">
                        <label class="label" for="description">
                            <span class="label-text text-primary"
                                >description</span
                            >
                        </label>
                        <textarea
                            class="textarea entry-textarea h-36 textarea-bordered"
                            bind:value={Desc}
                            placeholder="what happened today??"
                        />
                    </div>

                    <div class="w-full flex items-center justify-around mt-6">
                        <div class="dropdown">
                            <div class="tooltip tooltip-bottom" data-tip="mood">
                                <button class="btn btn-ghost">{Mood}</button>
                            </div>
                            <div
                                class="dropdown-content mb-16  bottom-8 border bg-base-100 menu w-64 sm:w-96 p-6  rounded "
                            >
                                <ul
                                    class="flex flex-wrap items-center justify-around"
                                >
                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>😊</button
                                        >
                                    </li>
                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>😂</button
                                        >
                                    </li>

                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>😍</button
                                        >
                                    </li>
                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>😎</button
                                        >
                                    </li>
                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>🙁</button
                                        >
                                    </li>
                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>😡</button
                                        >
                                    </li>
                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>😞</button
                                        >
                                    </li>
                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>👀</button
                                        >
                                    </li>
                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>😱</button
                                        >
                                    </li>
                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>💩</button
                                        >
                                    </li>
                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>😴</button
                                        >
                                    </li>
                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>👨🏾‍💻</button
                                        >
                                    </li>
                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>✌🏾</button
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="form-control w-10/12">
                            <input
                                type="text"
                                placeholder="@tags @happy @important"
                                bind:value={Tags}
                                class="input input-bordered"
                            />
                        </div>
                    </div>
                    <button
                        class="btn btn-block btn-primary mt-8"
                        on:click={updateEntry}>Update entry</button
                    >
                </div>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    @use '../static/css/theme.scss';
    .date-picker {
        @apply bg-base-100;
        --tw-bg-opacity: 1;
        $textfield-bg: transparent;
    }
</style>
