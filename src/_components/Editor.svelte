<script>
    import { fly, fade } from "svelte/transition";
    import Icon from "./icon.svelte";
    import entries from "../store/entries";
    import { onDestroy, onMount } from "svelte";
    import timeFunctions from "../scripts/timeFunctions";
    import dbM from "../scripts/dbManager";
    let activeTab, closedClass, Entries, tags, title, desc, date, mood;
    closedClass =
        "w-screen h-screen hero-overlay md:fixed top-0 grid place-items-center z-50 hidden";
    mood = "😍";
    activeTab = 0;
    function tabbed() {
        if (activeTab == 0) {
            activeTab = 1;
        } else {
            activeTab = 0;
        }
    }
    function changeMood(e) {
        mood = e.target.innerText;
        document.querySelector(".entry-textarea").click();
    }
    function closeEditor() {
        closedClass = closedClass + " hidden";
    }
    function openEditor() {
        closedClass =
            "w-screen h-screen hero-overlay overflow-scroll fixed  top-1 grid place-items-center z-50 mb-28";
    }
    function formatTags(val) {
        let formatted = val.split("@");
        let result = [];
        for (let index = 0; index < formatted.length; index++) {
            const tag = formatted[index].trim();
            let newTag = {};
            switch (tag) {
                case "important":
                    newTag = {
                        text: tag,
                        type: "error",
                    };
                    break;
                case "bad":
                    newTag = {
                        text: tag,
                        type: "error",
                    };
                    break;
                case "happy":
                    newTag = {
                        text: tag,
                        type: "success",
                    };
                    break;
                case "feeling loved":
                    newTag = {
                        text: tag,
                        type: "success",
                    };
                    break;
                case "sad":
                    newTag = {
                        text: tag,
                        type: "warning",
                    };
                    break;

                default:
                    newTag = {
                        text: tag,
                        type: "info",
                    };
                    break;
            }
            result.push(newTag);
        }
        // result.reverse().pop();
        console.log(result);
        return result;
    }
    function addEntry() {
        date = timeFunctions.today();
        entries.update((value) => {
            return [
                ...Entries,
                {
                    date: date,
                    title: title,
                    desc: desc,
                    tags: formatTags(tags),
                    mood: mood,
                },
            ];
        });
        dbM.setItemValue("AVECAS_ENTRIES", Entries);
        title, desc, (tags = "");

        closeEditor();
    }

    const unsubscribe = entries.subscribe((value) => {
        Entries = value;
    });
    onMount(() => {
        // dbM.getOrSetItem("AVECAS_ENTRIES", Entries);
        entries.update((value) => {
            return dbM.getItemValue("AVECAS_ENTRIES");
        });
    });
    onDestroy(() => {
        unsubscribe;
    });
</script>

<div
    class="tooltip tooltip-right fixed bottom-14 left-5 z-10"
    data-tip="add new entry"
>
    <button
        class="btn btn-primary shadow-lg btn-lg btn-circle "
        on:click={openEditor}><Icon name="plus" /></button
    >
</div>
<div class={closedClass} transition:fade>
    <div
        class="border mockup-window border-base-300 w-11/12 lg:w-4/12  mx-auto bg-base-100 my-auto z-50"
    >
        <button
            class="btn absolute top-3 right-3 btn-ghost btn-sm "
            on:click={closeEditor}><Icon name="x" /></button
        >
        <div class=" px-4  py-8 border-t border-base-300">
            <div class="tabs">
                <div
                    class:tab-active={activeTab === 0}
                    class="tab tab-lifted"
                    on:click={tabbed}
                >
                    Entry
                </div>
                <div
                    class:tab-active={activeTab !== 0}
                    class="tab tab-lifted"
                    on:click={tabbed}
                >
                    Todo
                </div>
            </div>
            {#if activeTab === 0}
                <div>
                    <h1 class="font-bold text-3xl py-5 ">Add Entry</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text text-primary">Title</span>
                        </label>
                        <input
                            bind:value={title}
                            placeholder="Happy Day "
                            class="input input-bordered"
                            type="text"
                        />
                    </div>

                    <div class="form-control mt-4">
                        <label class="label">
                            <span class="label-text text-primary"
                                >description</span
                            >
                        </label>
                        <textarea
                            class="textarea entry-textarea h-36 textarea-bordered"
                            bind:value={desc}
                            placeholder="what happened today??"
                        />
                    </div>

                    <div class="w-full flex items-center justify-around mt-6">
                        <div class="dropdown">
                            <div class="tooltip tooltip-bottom" data-tip="mood">
                                <button class="btn btn-ghost">{mood}</button>
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
                                            on:click={changeMood}>😡</button
                                        >
                                    </li>
                                    <li>
                                        <button
                                            class="btn btn-ghost"
                                            on:click={changeMood}>😞</button
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="form-control w-10/12">
                            <input
                                type="text"
                                placeholder="@tags @happy @important"
                                bind:value={tags}
                                class="input input-bordered"
                            />
                        </div>
                    </div>
                    <button
                        class="btn btn-block btn-primary mt-8"
                        on:click={addEntry}>Save entry</button
                    >
                </div>
            {:else}
                <div>
                    <h1 class="font-bold text-3xl py-5 ">Add Todo</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text text-primary">Title</span>
                        </label>
                        <input
                            placeholder="Clean Windows of basement"
                            class="input input-bordered"
                            type="text"
                        />
                    </div>

                    <div class="form-control mt-4">
                        <label class="label">
                            <span class="label-text text-primary"
                                >description</span
                            >
                        </label>
                        <textarea
                            class="textarea h-36 textarea-bordered"
                            placeholder="Anything to add??"
                        />
                    </div>

                    <div class="form-control w-full mt-4">
                        <label class="label">
                            <span class="label-text text-primary">tags</span>
                        </label>
                        <input
                            type="text"
                            placeholder="@tags @happy @important"
                            class="input input-bordered"
                        />
                    </div>
                    <button class="btn btn-block btn-primary mt-8"
                        >Add Todo</button
                    >
                </div>
            {/if}
        </div>
    </div>
</div>
