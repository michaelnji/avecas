<script>
    import EmptyNotification from "./../EmptyNotification.svelte";
    import TodoCard from "./../todoCard.svelte";
    export let todos;
</script>

{#if todos.length > 0}
    <div class="artboard">
        <div class="grid grid-cols-1">
            {#each todos as todo}
                <TodoCard
                    todo={todo.todo}
                    tags={todo.tags}
                    priority={todo.priority}
                    isChecked={todo.isChecked}
                    dueBefore={todo.date}
                    id={todo.id}
                />
            {/each}
        </div>
    </div>
{:else}
    <h1 class="text-3xl mt-3 font-semibold text-opacity-50">
        No Pending Tasks
    </h1>
    <EmptyNotification />
{/if}
