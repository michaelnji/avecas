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
    let priorityClass, Todos, todoUnsubscribe, current_todo, isShow;
    todoUnsubscribe = todos.subscribe((value) => {
        Todos = value;
    });
    dbManager;
    onMount(() => {
        isShow = true;
    });
    onDestroy(() => {
        isShow = false;

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
                if (el.id === id) {
                    el.isChecked = !el.isChecked;
                } else if (el.id !== id) {
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

<div class="card m-3 bg-base-100 pb-4   overflow-visible shadow-xl ">
    <div class="m-4 max-w-max"><TodoModal {id} /></div>
    <div class=" cursor-pointer p-4 w-full" on:click|once={checkTodo} out:fade>
        <div class="form-control w-full">
            <label class=" label mr-3 cursor-pointer max-w-1/12" for={todo}>
                <h3 class={"text-xl  font-bold  " + priorityClass}>
                    {todo}
                </h3>
            </label>
        </div>

        {#if tags}
            <div
                class="w-full mt-4 flex-wrap px-4 pb-3  flex justify-start items-center"
            >
                {#each tags as tag}
                    <Badge type={tag.type || "info"} inButton>
                        {tag.text}
                    </Badge>
                {/each}
            </div>
        {/if}
        {#if dueBefore}
            <p class="date pt-6 px-4">
                DUE: <span class="ml-2 text-accent font-semibold capitalize"
                    >{dueBefore}</span
                >
            </p>
        {/if}
    </div>
</div>

<style>
    .date {
        opacity: 0.8;
    }
</style>
