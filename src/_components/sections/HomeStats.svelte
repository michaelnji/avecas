<script>
    import { onDestroy } from "svelte";
    import entries from "../../store/entries";
    import todos from "../../store/todos";
    let Todos, Entries;
    const todoUnsubscribe = todos.subscribe((value) => {
        Todos = value;
    });
    const Unsubscribe = entries.subscribe((value) => {
        Entries = value;
    });
    onDestroy(() => {
        todoUnsubscribe;
        Unsubscribe;
    });
</script>

<div
    class="stats  border w-full overflow-hidden grid-flow-row lg:grid-flow-col"
>
    <div class="stat place-items-center place-content-center">
        <div class="stat-title ">Total tasks completed</div>
        <div class="stat-value ">{Todos.length}</div>
    </div>
    <div class="stat place-items-center place-content-center">
        <div class="stat-title ">Total Entries</div>
        <div class="stat-value ">{Entries.length}</div>
    </div>
    <div class="stat place-items-center place-content-center">
        <div class="stat-title ">Moods</div>
        <div class="stat-value ">80</div>
    </div>
</div>
