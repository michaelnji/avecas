<script>
  import Badge from "./badge.svelte";
  export let tags, title, desc, date;
</script>

<div class="card border m-3">
  <div class="card-body">
    {#if date}
      <span class="my-3 text-gray-400 font-semibold">{date}</span>
    {/if}
    <h2 class="card-title font-bold text-primary-focus">{title}</h2>
    <p>{desc}</p>
    {#if tags}
      <div class="w-full mt-4 flex-wrap  flex justify-start items-center">
        {#each tags as tag}
          <Badge type={tag.type || "info"} inButton>
            {tag.text}
          </Badge>
        {/each}
      </div>
    {/if}
  </div>
</div>
