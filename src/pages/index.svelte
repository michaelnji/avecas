<script>
  import HomeStats from "./../_components/sections/HomeStats.svelte";
  import HomeTodoEntries from "./../_components/sections/HomeTodoEntries.svelte";
  import Icon from "./../_components/icon.svelte";
  import Badge from "./../_components/badge.svelte";
  import { metatags } from "@roxi/routify";
  import HomeEntries from "../_components/sections/HomeEntries.svelte";
  metatags.title = "Avecas";
  metatags.description = "A personalised diary App";
</script>

<!-- routify:options index=0 -->
<main class=" px-6 py-8  w-screen">
  <div class="flex flex-wrap w-full justify-between">
    <div class="w-full md:w-11/12 md:mx-auto lg:w-6/12">
      <h1 class="font-extrabold text-4xl mb-3 text-base-content">
        Entries <Badge size="md" type="info">10 new</Badge>
      </h1>
      <HomeEntries />
    </div>
    <div class="w-full md:w-11/12 md:mx-auto lg:w-5/12 my-12 lg:my-0">
      <div class="mb-7">
        <h1 class="font-extrabold text-4xl mb-3">
          TODOS <Badge size="md" type="success">1 pending</Badge>
        </h1>
        <HomeTodoEntries />
      </div>
      <div>
        <h1 class="font-extrabold text-4xl mb-3">Stats</h1>
        <HomeStats />
      </div>
    </div>
  </div>
</main>
