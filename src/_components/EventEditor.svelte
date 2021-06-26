<script>
    import DatePicker from "./datePicker.svelte";
    import { fade } from "svelte/transition";
    import timeFunctions from "../scripts/timeFunctions";
    import Icon from "./icon.svelte";

    let closedClass;
    closedClass = false;
    function closeEditor() {
        closedClass = false;
    }
    function openEditor() {
        closedClass = true;
    }
</script>

<div
    class="tooltip tooltip-right fixed bottom-14 left-5 z-10"
    data-tip="add new event"
>
    <button
        class="btn btn-primary shadow-lg btn-lg btn-circle hover:rotate-45 transform"
        on:click={openEditor}><Icon name="zap" /></button
    >
</div>
{#if closedClass}
    <div
        class="w-screen min-h-screen hero-overlay overflow-scroll fixed top-0 grid place-items-center z-50 mb-28"
        transition:fade
    >
        <div
            class="border mockup-window overflow-visible border-base-300 w-11/12 lg:w-4/12  mx-auto bg-base-100 my-auto z-50"
        >
            <button
                class="btn absolute top-3 right-3 btn-ghost btn-sm "
                on:click={closeEditor}><Icon name="x" /></button
            >
            <div class=" px-4  py-8 border-t border-base-300">
                <div>
                    <h1 class="font-bold text-3xl py-5 ">Add Event</h1>
                    <div
                        class="flex flex-col lg:flex-row  lg:items-center w-full lg:justify-start"
                    >
                        <div class="form-control w-full mr-8">
                            <label class="label" for="title">
                                <span class="label-text text-primary"
                                    >Title</span
                                >
                            </label>
                            <input
                                placeholder="Happy Day "
                                class="input input-bordered w-full"
                                type="text"
                                name="title"
                            />
                        </div>
                        <div class="form-control mt-4 sm:mt-0">
                            <label class="label" for="date">
                                <span class="label-text text-primary">Date</span
                                >
                            </label>
                            {#if window.innerWidth > 900 && window.innerWidth < 1400}
                                <DatePicker top={false} right={true} />
                            {:else}
                                <DatePicker right={false} top={false} />
                            {/if}
                        </div>
                    </div>

                    <div class="form-control mt-4">
                        <label class="label" for="description">
                            <span class="label-text text-primary"
                                >description</span
                            >
                        </label>
                        <textarea
                            name="description"
                            class="textarea h-28 sm:h-36 textarea-bordered"
                            placeholder="what happened today??"
                        />
                    </div>

                    <div class="w-full flex items-center justify-around mt-6">
                        <div
                            class="tooltip tooltip-top z-50"
                            data-tip="importance"
                        >
                            <button class="btn btn-ghost text-error"
                                ><Icon name="flag" /><button /></button
                            >
                        </div>
                        <div class="form-control w-10/12">
                            <input
                                type="text"
                                placeholder="@tags @happy @important"
                                class="input input-bordered"
                            />
                        </div>
                    </div>
                    <button class="btn btn-block btn-primary mt-8"
                        >Save entry</button
                    >
                </div>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    @use '../static/css/theme.scss';
    .date-picker {
        @apply bg-base-100;
        --tw-bg-opacity: 1;
        $textfield-bg: transparent;
    }
</style>
