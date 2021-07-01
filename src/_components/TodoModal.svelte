<script>
    import DatePicker from "./datePicker.svelte";
    import { fade } from "svelte/transition";
    import Icon from "./icon.svelte";
    import todos from "../store/todos";
    import { onDestroy, onMount } from "svelte";
    import timeFunctions from "../scripts/timeFunctions";
    import dbM from "../scripts/dbManager";
    import { getNotificationsContext } from "svelte-notifications";
    import tp from "../scripts/tagsParser";

    export let id;
    const { addNotification } = getNotificationsContext();
    let closedClass,
        Todos,
        Todo,
        Tags,
        newTodo,
        isChecked,
        todoPriority,
        newTodos,
        todoDate,
        currentTodo;

    closedClass = false;
    function openTodoEditor() {
        closedClass = true;
    }
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
    function closeEditor() {
        closedClass = false;
    }
    function deleteTodo() {
        newTodos = [];
        Todos.forEach((todo) => {
            if (todo.id !== id) {
                newTodos.push(todo);
            }
        });

        todos.update((value) => {
            return [...newTodos];
        });

        dbM.setItemValue("AVECAS_TODOS", Todos);
        closeEditor();
        addNotification({
            text: "Todo deleted",
            position: "bottom-right",
            type: "danger",
            removeAfter: 2000,
        });
    }
    function updateTodo() {
        newTodos = [];
        Todos.forEach((todo) => {
            if (todo.id !== id) {
                newTodos.push(todo);
            } else {
                currentTodo = todo;
            }
        });
        newTodo = {
            todo: Todo,
            priority: todoPriority ? todoPriority : "",
            isChecked: false,
            tags: tp.formatTags(Tags),
            id: id,
            date: todoDate ? todoDate : currentTodo.date,
        };

        todos.update((value) => {
            return [newTodo, ...newTodos];
        });

        dbM.setItemValue("AVECAS_TODOS", Todos);
        closeEditor();
        addNotification({
            text: "Todo updated",
            position: "bottom-right",
            type: "success",
            removeAfter: 2000,
        });
    }

    const unsubscribe = todos.subscribe((value) => {
        Todos = value;
    });

    onMount(() => {
        todos.update((value) => {
            return dbM.getItemValue("AVECAS_TODOS");
        });
        newTodos = [];
        Todos.forEach((todo) => {
            if (todo.id !== id) {
                newTodos.push(todo);
            } else {
                currentTodo = todo;
            }
        });
        // Tags = tp.arrayToString(currentTodo.tags);

        Todo = currentTodo.todo;
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
                    class="w-full btn hover:text-accent btn-ghost"
                    on:click={openTodoEditor}>edit</button
                >
            </li>
            <li>
                <button
                    class="w-full hover:text-primary btn btn-ghost"
                    on:click={deleteTodo}>delete</button
                >
            </li>
        </ul>
    </div>
</div>
{#if closedClass}
    <div
        class="w-screen h-screen hero-overlay left-0 fixed top-0 overflow-scroll grid place-items-center z-50 "
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
                    <h1 class="font-bold text-3xl py-5 ">Update Todo</h1>
                    <div class="form-control">
                        <label class="label" for="todo">
                            <span class="label-text text-primary">Todo</span>
                        </label>
                        <input
                            bind:value={Todo}
                            placeholder="Clean basement"
                            class="input input-bordered"
                            type="text"
                        />
                    </div>
                    <div class="form-control mt-4 sm:mt-0">
                        <label class="label" for="date">
                            <span class="label-text text-primary">Date</span>
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
                    <div class="form-control w-11/12 mt-4">
                        <label class="label" for="todo">
                            <span class="label-text text-primary">Tags</span>
                        </label>
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
                    on:click={updateTodo}>Update todo</button
                >
            </div>
        </div>
    </div>
{/if}
