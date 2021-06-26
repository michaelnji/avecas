<script>
    import ThemeToggle from "./../../_components/themeToggle.svelte";
    import Badge from "../../_components/badge.svelte";
    import { createEventDispatcher } from "svelte";
    import dbManager from "../../scripts/dbManager";
    import entries from "../../store/entries";
    import todos from "../../store/todos";
    const dispatch = createEventDispatcher();
    function pushEvent() {
        dispatch("requestTheme");
    }
    function cdb() {
        // dbManager.clearDB();
        dbManager.setItemValue("AVECAS_ENTRIES", []);
        entries.update((value) => {
            return dbManager.getItemValue("AVECAS_ENTRIES");
        });
        dbManager.setItemValue("AVECAS_TODOS", []);
        todos.update((value) => {
            return dbManager.getItemValue("AVECAS_TODOS");
        });
    }
</script>

<div class=" lg:px-24 md:px-12 px-6 w-screen">
    <h1
        class="font-extrabold text-5xl md:text-7xl my-8 sm:my-3 text-base-content text-center"
    >
        Settings
    </h1>
    <div
        class="w-full  flex flex-wrap lg:grid lg:grid-cols-2 items-center justify-around lg:justify-center mt-14"
    >
        <!-- backup -->
        <div class="card my-3 bg-base-100 p-6 w-full md:w-7/12 lg:w-max ">
            <h2 class="card-title text-2xl">Backup</h2>
            <div class="menu">
                <div class=" py-3 flex items-center justify-start">
                    <button class="btn btn-sm   btn-accent mr-3"
                        >Create Backup</button
                    >
                    <button class="btn btn-sm   btn-ghost">load Backup</button>
                </div>
            </div>
        </div>
        <div
            class="flex justify-around  flex-col md:flex-row md:inline-block w-full"
        >
            <!-- database -->
            <div
                class="card my-3 bg-base-100 p-6 w-full md:w-7/12 lg:w-max md:mx-auto lg:mx-0 "
            >
                <h2 class="card-title text-2xl">Database</h2>
                <div class="menu">
                    <div
                        class=" py-3 flex flex-col lg:flex-row items-start  md:justify-between justify-start mr-3 md:mr-0"
                    >
                        <button
                            class="btn btn-sm   btn-ghost text-error mr-3"
                            on:click={cdb}
                            >clear database
                        </button>
                        <button class="btn btn-sm   btn-ghost"
                            >sync with cloud</button
                        >
                    </div>
                </div>
            </div>
        </div>
        <!-- Stats -->
        <div class="card my-3 bg-base-100 p-6 w-full md:w-7/12 lg:w-max ">
            <h2 class="card-title text-2xl">Statistics</h2>
            <div class="menu">
                <div
                    class="  py-3 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between justify-start"
                >
                    <button class="btn btn-sm btn-accent lg:mr-3 mb-3 lg:mb-0"
                        >Generate stats</button
                    >
                    <button class="btn btn-sm   btn-ghost"
                        >download stats (JSON)</button
                    >
                </div>
            </div>
        </div>
        <!-- Security -->
        <div class="card my-3 bg-base-100 p-6 w-full md:w-7/12 lg:w-max ">
            <h2 class="card-title text-2xl">Security</h2>
            <div class="menu">
                <div
                    class=" py-3 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between justify-start"
                >
                    <button
                        class="btn btn-sm   btn-accent  lg:mr-3 mb-3 lg:mb-0"
                        >Add Password</button
                    >
                    <button
                        class="btn btn-sm   btn-ghost text-error  lg:mr-3 mb-3 lg:mb-0"
                        >Reset password</button
                    >
                    <button
                        class="btn btn-sm   btn-ghost hover:text-black   text-primary mr-3"
                        >add reset question</button
                    >
                </div>
            </div>
        </div>
        <!--About  -->
        <div class="card  my-3 bg-base-100 p-6 w-full md:w-7/12 lg:w-max ">
            <h2 class="card-title text-2xl">About</h2>
            <div class="menu">
                <div
                    class=" py-3 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between justify-start"
                >
                    <a
                        href="https://github.com/michaelnji/avecas"
                        class="btn btn-sm btn-ghost  lg:mr-3 mb-3 lg:mb-0"
                        >github</a
                    >
                    <a
                        href="https://github.com/michaelnji"
                        class="btn btn-sm   btn-link text-error  lg:mr-3 mb-3 lg:mb-0"
                        >author</a
                    >
                    <button
                        class="btn btn-sm btn-ghost hover:text-black  text-primary mr-3"
                        >About avecas</button
                    >
                </div>
            </div>
        </div>
    </div>
</div>
