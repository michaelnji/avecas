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
    id="h"
    class="  bg-base-100  border w-full flex   max-w-full overflow-x-scroll"
>
    <div class="stat  ">
        <div class="stat-title ">Assigned tasks</div>
        <div class="stat-value ">{Todos.length}</div>
    </div>
    <div class="stat  ">
        <div class="stat-title ">Total Entries</div>
        <div class="stat-value ">{Entries.length}</div>
    </div>
    <div class="stat  ">
        <div class="stat-title ">Moods</div>
        <div class="stat-value ">80</div>
    </div>
</div>

<style lang="scss">
    #h {
        flex-direction: row;
        @media screen and (max-width: 1250px) {
            flex-direction: column !important;
        }
    }
</style>
