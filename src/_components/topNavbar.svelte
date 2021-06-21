<script>
  import Calendar from "./calendar.svelte";
  import ThemeToggle from "./themeToggle.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  function pushEvent() {
    dispatch("requestTheme");
  }
</script>

<div
  class="flex justify-between items-center w-full fixed py-4 px-8 glass z-10 top-0 left-0 right-0"
>
  <h1 class="logo sm:text-3xl text-2xl font-extrabold text-primary">Avecas</h1>
  <div>
    <div class="hidden sm:inline-block">
      <ThemeToggle on:changeTheme={pushEvent} />
    </div>

    <Calendar />
  </div>
</div>
