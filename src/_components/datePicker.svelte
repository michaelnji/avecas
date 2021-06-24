<script>
    import { DatePicker } from "attractions";
    export let top, right;
</script>

<div>
    <DatePicker
        class="bg-red-200 text-black"
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
