<script>
    export let notification = {};
    // `onRemove` function will be passed into your component.
    export let onRemove = () => {
        return true;
    };

    const handleButtonClick = () => {
        onRemove();
    };
</script>

<div class={notification.type === "error" ? "error" : "" + "bg-primary"}>
    <h4>{notification.heading}</h4>
    <p>{notification.description}</p>
    <button on:click={handleButtonClick}>Close me</button>
</div>
