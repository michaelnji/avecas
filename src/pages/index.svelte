<script>
  import HomeTodoEntries from "./../_components/sections/HomeTodoEntries.svelte";
  import Icon from "./../_components/icon.svelte";
  import Badge from "./../_components/badge.svelte";
  import { metatags } from "@roxi/routify";
  import Calendar from "../_components/calendar.svelte";
  import HomeEntries from "../_components/sections/HomeEntries.svelte";
  metatags.title = "Avecas";
  metatags.description = "A personalised diary App";
</script>

<!-- routify:options index=0 -->
<main class=" px-6 py-8  w-screen">
  <div class="flex justify-between items-center min-w-full mx-auto">
    <h1 class="logo text-3xl font-bold text-primary">Avecas</h1>
    <div>
      <button class="btn btn-outline mr-3 hidden md:inline-block">
        <Icon name="sun" /></button
      >
      <Calendar />
    </div>
  </div>
  <div class="flex flex-wrap w-full mt-7 mb-14 justify-between">
    <div class="w-full md:w-11/12 md:mx-auto lg:w-6/12">
      <h1 class="font-bold text-4xl mb-3">
        Entries <Badge size="md" type="info">10 new</Badge>
      </h1>
      <HomeEntries />
    </div>
    <div class="w-full md:w-11/12 md:mx-auto lg:w-5/12 my-12 lg:my-0">
      <h1 class="font-bold text-4xl mb-3">
        TODOS <Badge size="md" type="success">1 pending</Badge>
      </h1>
      <HomeTodoEntries />
    </div>
  </div>
</main>
