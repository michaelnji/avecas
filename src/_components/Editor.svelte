<script>
    import DatePicker from "./datePicker.svelte";
    import { v4 as uuidv4 } from "uuid";
    import { fly, fade } from "svelte/transition";
    import Icon from "./icon.svelte";
    import entries from "../store/entries";
    import { onDestroy, onMount } from "svelte";
    import timeFunctions from "../scripts/timeFunctions";
    import dbM from "../scripts/dbManager";
    import todos from "../store/todos";
    import tp from "../scripts/tagsParser";
    import { getNotificationsContext } from "svelte-notifications";
    export let tab;
    const { addNotification } = getNotificationsContext();
    let activeTab,
        closedClass,
        Entries,
        Todos,
        tags,
        title,
        desc,
        todoDate,
        todo,
        todoImportance,
        todoTags,
        mood,
        todoPriority,
        uniq_id;
    closedClass = false;
    mood = "😍";
    activeTab = tab;
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
        closedClass = false;
    }
    function openEditor() {
        closedClass = true;
    }

    /* 
 format date sent up from datePicker.svelte
    */
    function setDate(e) {
        let receivedDate = e.detail;
        let d = new Date(receivedDate);
        let dayNum = d.getDate();
        let day = d.getDay();
        let year = d.getUTCFullYear();
        let month = d.getUTCMonth();
        todoDate = `${timeFunctions.returnDay(
            day
        )}, ${dayNum} ${timeFunctions.returnMonth(month)} ${year}`;
    }
    function addEntry() {
        let date;
        date = timeFunctions.today();
        uniq_id = uuidv4();
        entries.update((value) => {
            return [
                ...Entries,
                {
                    date: date,
                    title: title,
                    desc: desc,
                    tags: tp.formatTags(tags),
                    mood: mood,
                    id: uniq_id,
                },
            ];
        });

        dbM.setItemValue("AVECAS_ENTRIES", Entries);
        title, desc, (tags = "");

        closeEditor();
        addNotification({
            text: "Entry Added",
            position: "top-center",
            type: "success",
            removeAfter: 2000,
        });
    }
    function addTodo() {
        uniq_id = uuidv4();
        todos.update((value) => {
            return [
                ...Todos,
                {
                    date: todoDate,
                    todo: todo,
                    tags: todoTags ? tp.formatTags(todoTags) : false,
                    priority: todoPriority ? todoPriority : "",
                    isChecked: false,
                    id: uniq_id,
                },
            ];
        });

        dbM.setItemValue("AVECAS_TODOS", Todos);
        todo = "";
        todoTags = "";
        todoDate = "";

        closeEditor();
        addNotification({
            text: "Todo Added",
            position: "top-center",
            type: "success",
            removeAfter: 2000,
        });
    }

    const unsubscribe = entries.subscribe((value) => {
        Entries = value;
    });
    const todoUnsubscribe = todos.subscribe((value) => {
        Todos = value;
    });
    onMount(() => {
        // dbM.getOrSetItem("AVECAS_ENTRIES", Entries);
        entries.update((value) => {
            return dbM.getItemValue("AVECAS_ENTRIES");
        });
        todos.update((value) => {
            return dbM.getItemValue("AVECAS_TODOS");
        });
    });
    onDestroy(() => {
        unsubscribe;
        todoUnsubscribe;
    });
</script>

<div
    class="tooltip tooltip-right fixed bottom-14 left-5 z-10"
    data-tip="add new entry"
>
    <button
        class="btn btn-primary shadow-lg btn-lg btn-circle hover:rotate-45 transform"
        on:click={openEditor}><Icon name="plus" /></button
    >
</div>
{#if closedClass}
    <div
        class="w-screen h-screen hero-overlay overflow-scroll fixed  top-1 grid place-items-center z-50 mb-28"
        transition:fade
    >
        <div
            class="border mockup-window border-base-300 w-11/12 lg:w-4/12  mx-auto bg-base-100 my-auto z-50 overflow-visible"
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
                    <div transition:fade>
                        <h1 class="font-bold text-3xl py-5 ">Add Entry</h1>
                        <div class="form-control">
                            <label class="label" for="title">
                                <span class="label-text text-primary"
                                    >Title</span
                                >
                            </label>
                            <input
                                bind:value={title}
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
                                bind:value={desc}
                                placeholder="what happened today??"
                            />
                        </div>

                        <div
                            class="w-full flex items-center justify-around mt-6"
                        >
                            <div class="dropdown">
                                <div
                                    class="tooltip tooltip-bottom"
                                    data-tip="mood"
                                >
                                    <button class="btn btn-ghost">{mood}</button
                                    >
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
                    <div transition:fade>
                        <h1 class="font-bold text-3xl py-5 ">Add Todo</h1>

                        <div class="flex flex-col-reverse lg:flex-row ">
                            <div class="form-control w-full">
                                <label class="label" for="todo">
                                    <span class="label-text text-primary"
                                        >Todo</span
                                    >
                                </label>
                                <input
                                    placeholder="Clean Windows of basement"
                                    bind:value={todo}
                                    class="input input-bordered"
                                    type="text"
                                />
                            </div>

                            <div class="form-control mt-4 sm:mt-0 md:ml-4">
                                <label class="label" for="date">
                                    <span class="label-text text-primary"
                                        >Date</span
                                    >
                                </label>
                                {#if window.innerWidth > 900 && window.innerWidth < 1400}
                                    <DatePicker
                                        top={false}
                                        right={true}
                                        on:chooseDate={setDate}
                                    />
                                {:else}
                                    <DatePicker
                                        right={false}
                                        top={false}
                                        on:chooseDate={setDate}
                                    />
                                {/if}
                            </div>
                        </div>

                        <div class="form-control w-full mt-4">
                            <label class="label" for="tags">
                                <span class="label-text text-primary">tags</span
                                >
                            </label>
                            <input
                                type="text"
                                bind:value={todoTags}
                                placeholder="@tags @happy @important"
                                class="input input-bordered"
                            />
                        </div>
                        <button
                            class="btn btn-block btn-primary mt-8"
                            on:click={addTodo}>Add Todo</button
                        >
                    </div>
                {/if}
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
