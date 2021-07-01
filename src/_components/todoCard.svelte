<script>
    import TodoModal from "./TodoModal.svelte";
    import { onDestroy, onMount } from "svelte";
    import todos from "../store/todos";
    import Badge from "./badge.svelte";
    import dbManager from "../scripts/dbManager";
    import { fade } from "svelte/transition";
    import { getNotificationsContext } from "svelte-notifications";
    const { addNotification } = getNotificationsContext();
    export let tags, todo, priority, isChecked, dueBefore, id;
    let priorityClass, Todos, todoUnsubscribe, current_todo;
    todoUnsubscribe = todos.subscribe((value) => {
        Todos = value;
    });
    dbManager;

    onDestroy(() => {
        todoUnsubscribe;
    });

    function checkTodo() {
        todos.update((value) => {
            return dbManager.getItemValue("AVECAS_TODOS");
        });
        current_todo = Todos;
        let val = [];
        if (current_todo.length > 1) {
            current_todo.forEach((el) => {
                if (el.id == id) {
                    el.isChecked = !el.isChecked;
                }
                if (el.id !== id) {
                    val.push(el);
                }
            });
        } else {
            val = [];
        }
        dbManager.setItemValue("AVECAS_TODOS", val);

        todos.update((value) => {
            return dbManager.getItemValue("AVECAS_TODOS");
        });
        addNotification({
            text: "success!",
            position: "bottom-right",
            type: "success",
            removeAfter: 2000,
        });
    }
    if (priority) {
        if (priority == "important") {
            priorityClass = "text-warning";
        } else if (priority == "urgent") {
            priorityClass = "text-error";
        }
    }
</script>

<div
    class="card shadow bg-base-100 m-3 p-4  overflow-visible shadow-md"
    on:click|self={checkTodo}
    out:fade
>
    <div><TodoModal {id} /></div>
    <div class="form-control" on:click={checkTodo}>
        <label
            class="cursor-pointer label mr-3"
            for={todo}
            on:click={checkTodo}
        >
            <h3 class={"text-xl  font-bold mr-2 " + priorityClass}>
                {todo}
            </h3>
            <div on:click={checkTodo}>
                <input
                    on:click={checkTodo}
                    name={todo}
                    type="checkbox"
                    bind:checked={isChecked}
                    class="checkbox"
                />
                <span class="checkbox-mark" />
            </div>
        </label>
    </div>

    {#if tags}
        <div
            class="w-full mt-4 flex-wrap  flex justify-start items-center"
            on:click={checkTodo}
        >
            {#each tags as tag}
                <Badge type={tag.type || "info"} inButton>
                    {tag.text}
                </Badge>
            {/each}
        </div>
    {/if}
    {#if dueBefore}
        <p class="date pt-8">
            DUE: <span class="ml-2 text-accent font-semibold capitalize"
                >{dueBefore}</span
            >
        </p>
    {/if}
</div>

<style>
    .date {
        opacity: 0.8;
    }
</style>
