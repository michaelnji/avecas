<script>
    import { DatePicker } from "attractions";
    import { createEventDispatcher } from "svelte";
    export let top, right;
    const dispatch = createEventDispatcher();
    // send date up one level to editor and eventEditor component
    function sendDate(e) {
        const data = e.detail.value;
        dispatch("chooseDate", data);
    }
</script>

<div>
    <DatePicker
        on:change={sendDate}
        class="bg-base-200 text-black"
        weekdaysClass="text-primary"
        format="%m/%d/%Y"
        {top}
        {right}
    />
</div>

<style lang="scss">
    @use '../static/css/theme.scss';
    @import "../../node_modules/attractions/_variables.scss";
    .date-picker {
        $main: red;
    }
</style>
