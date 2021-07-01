<script>
  export let type, closable, size, inButton, outlined;
  let margin = inButton ? "ml-2" : "";
  let outline = outlined ? "badge-outline" : "";
  let classType =
    "my-1 badge badge-rounded text-xs border-0 badge-" +
    type +
    " badge-" +
    size +
    " " +
    outline +
    " " +
    margin;
  const closeBadge = () => {
    classType = classType + " hidden";
  };
</script>

<div class={classType}>
  {#if closable && !inButton}
    <span class={"cursor-pointer mr-2 text-" + type} on:click={closeBadge}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  {/if}
  <slot />
</div>
<style>
    
.badge {
  color: #a5b2bd;
  background: #e6e9ec;
  border-radius: 0.25rem;
  font-weight: 600;
  margin-top: 4px;
  margin-top: 0.25rem;
  margin-bottom: 4px;
  margin-bottom: 0.25rem;
  margin-left: 4px;
  margin-left: 0.25rem;
  margin-right: 4px;
  margin-right: 0.25rem;
  padding-top: 8px;
  padding-top: 0.5rem;
  padding-bottom: 8px;
  padding-bottom: 0.5rem;
  padding-left: 8px;
  padding-left: 0.5rem;
  padding-right: 8px;
  padding-right: 0.5rem;
}

.btn.badge {
  border-radius: 9999px;
}

.badge-primary {
  @apply text-primary bg-primary-content;

}

.badge-accent {
 @apply text-accent bg-accent-content;
}

.badge-error {
  @apply text-error bg-base-200;

}

.badge-success {
   @apply text-success bg-base-200;

}

.badge-info {
   @apply text-info bg-base-200;

}

.badge-warning {
   @apply text-warning bg-base-200;

}

.badge-rounded {
  border-radius: 9999px;
}
.border-0{
    border-color: transparent !important;
}

</style>