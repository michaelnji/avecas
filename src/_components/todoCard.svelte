<script>
    import { onDestroy, onMount } from "svelte";
    import todos from "../store/todos";
    import Badge from "./badge.svelte";
    import dbManager from "../scripts/dbManager";
    import { fade } from "svelte/transition";
    export let tags, todo, priority, isChecked, dueBefore, id;
    let priorityClass, Todos, todoUnsubscribe, currentTodo;
    todoUnsubscribe = todos.subscribe((value) => {
        Todos = value;
    });
    dbManager;
    // onMount(() => {
    //     todos.update((value) => {
    //         return dbManager.getItemValue("AVECAS_TODOS");
    //     });
    // });
    onDestroy(() => {
        todoUnsubscribe;
    });

    function checkTodo() {
        todos.update((value) => {
            return dbManager.getItemValue("AVECAS_TODOS");
        });
        currentTodo = Todos;
        let val = [];
        if (currentTodo.length > 1) {
            currentTodo.forEach((el) => {
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
    }
    if (priority) {
        if (priority == "important") {
            priorityClass = "text-warning";
        } else if (priority == "urgent") {
            priorityClass = "text-error";
        }
    }
</script>

<div class="card shadow bg-base-100 m-3 p-4 " on:click={checkTodo} out:fade>
    <div class="form-control">
        <label class="cursor-pointer label mr-3" for={todo}>
            <h3 class={"text-2xl sm:text-xl font-bold mr-2 " + priorityClass}>
                {todo}
            </h3>
            <div>
                <input
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
        <div class="w-full mt-4 flex-wrap  flex justify-start items-center">
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
