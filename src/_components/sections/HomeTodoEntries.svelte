<script>
    import { flip } from "svelte/animate";
    import { fly, fade } from "svelte/transition";
    import EmptyNotification from "./../EmptyNotification.svelte";
    import TodoCard from "./../todoCard.svelte";
    export let todos;
</script>

{#if todos.length > 0}
    <div class="artboard" transition:fade>
        <div class="grid grid-cols-1">
            {#each todos as todo (todo.id)}
                <div
                    animate:flip={{ duration: 1000 }}
                    out:fly={{ x: -500, duration: 1000 }}
                >
                    <TodoCard
                        todo={todo.todo}
                        tags={todo.tags}
                        priority={todo.priority}
                        isChecked={todo.isChecked}
                        dueBefore={todo.date}
                        id={todo.id}
                    />
                </div>
            {/each}
        </div>
    </div>
{:else}
    <div transition:fade>
        <h1
            class="text-3xl mt-3 font-semibold text-opacity-50"
            style="opacity: 0.5;"
        >
            No Pending Tasks
        </h1>
        <EmptyNotification />
    </div>
{/if}
