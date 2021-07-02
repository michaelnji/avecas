<script>
    import Icon from "./icon.svelte";
    import EntryModal from "./EntryModal.svelte";
    import Badge from "./badge.svelte";
    export let tags, title, desc, date, mood, hideContent, id;
    let isTruncate = hideContent ? "truncate" : "prose";

    function reveal() {
        if (isTruncate == "truncate") {
            isTruncate = "prose";
        } else {
            isTruncate = "truncate";
        }
    }
</script>

<div
    on:click|self={reveal}
    class="card overflow-visible shadow-xl shadow-base-200 m-3 bg-base-100 text-xl transition-all duration-500 ease-in-out  cursor-pointer"
>
    <div>
        <EntryModal {id} />
    </div>
    <div
        class="mood bg-accent p-3 rounded-xl shadow-xl absolute -right-2 -top-2"
    >
        {mood}
    </div>
    <div class="card-body mt-4" on:click|preventDefault={reveal}>
        {#if date}
            <span class="my-3 text-base-content text-opacity-50 font-semibold"
                >{date}</span
            >
        {/if}
        <h2 class="card-title font-bold text-primary-focus truncate">
            {title}
        </h2>
        <p
            class={"prose-lg text-base-content text-opacity-60  mt-3 mb-6 transition-all duration-150 ease-in-out text-opacity-50 " +
                isTruncate}
        >
            {desc}
        </p>
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

<style>
    .card:hover .mood {
        transform: scale(1.04);
    }
</style>
