<script>
    import Badge from "./badge.svelte";
    export let tags, title, desc, date, mood;
</script>

<div
    class="card overflow-visible shadow-xl shadow-base-200 m-3 bg-base-100 text-xl"
>
    <div
        class="mood bg-accent p-3 rounded-xl shadow-xl absolute -right-2 -top-2"
    >
        {mood}
    </div>
    <div class="card-body">
        {#if date}
            <span class="my-3 text-base-content text-opacity-50 font-semibold"
                >{date}</span
            >
        {/if}
        <h2 class="card-title font-bold text-primary-focus truncate">
            {title}
        </h2>
        <p class="text-base-content text-opacity-60 truncate">{desc}</p>
        {#if tags}
            <div class="w-full mt-4 flex-wrap  flex justify-start items-center">
                {#each tags as tag}
                    <Badge
                        type={tag.type || "info"}
                        inButton
                        outlined={false}
                        size="base"
                    >
                        {tag.text}
                    </Badge>
                {/each}
            </div>
        {/if}
    </div>
</div>
