<script>
  import Calendar from "./calendar.svelte";
  import ThemeToggle from "./themeToggle.svelte";
</script>

<div
  class="flex justify-between items-center w-full fixed py-4 px-8 glass z-10 top-0 left-0 right-0"
>
  <h1 class="logo text-3xl font-bold text-primary">Avecas</h1>
  <div>
    <ThemeToggle />

    <Calendar />
  </div>
</div>
