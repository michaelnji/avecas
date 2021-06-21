<script>
  import Badge from "./badge.svelte";
  export let tags, todo, priority, isChecked;
  let priorityClass;
  if (priority) {
    if (priority == "important") {
      priorityClass = "text-warning";
    } else if (priority == "urgent") {
      priorityClass = "text-error";
    }
  }
</script>

<div class="card shadow bg-base-100 m-3 p-4 ">
  <div class="form-control">
    <label class="cursor-pointer label mr-3" for={todo}>
      <h3 class={"text-2xl sm:text-xl font-bold mr-2 " + priorityClass}>
        {todo}
      </h3>
      <div>
        <input
          name={todo}
          type="checkbox"
          bind:checked={isChecked}
          class="checkbox"
        />
        <span class="checkbox-mark" />
      </div>
    </label>
  </div>

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
