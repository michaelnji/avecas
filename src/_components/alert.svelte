<script>
  export let type, closable, actions, successAction;
  let classType = type
    ? " my-7 w-11/12 mx-auto transition-all duration-300 ease-linear alert alert-" +
      type
    : " my-7 w-11/12 mx-auto transition-all duration-300 ease-linear alert alert-primary";
  const closeAlert = () => {
    classType = classType + " hidden";
  };
</script>

<div class={classType}>
  <div class="flex-1">
    {#if type == "success"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-3 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    {:else if type == "error"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="w-6 h-6 mx-2 stroke-current"
        >>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    {:else if type == "warning"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="w-6 h-6 mx-2 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="w-6 h-6 mx-2 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    {/if}
    <label><slot /></label>
  </div>
  {#if closable}
    <div class="flex-none">
      <button
        class={"btn btn-sm  btn-circle mr-2 btn-" + type}
        on:click={closeAlert}
      >
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
      </button>
    </div>
  {/if}
  {#if actions && !closable}
    <div class="flex-none">
      <button class="btn btn-sm btn-ghost mr-2" on:click={closeAlert}
        >Cancel</button
      >
      <button class={"btn btn-sm btn-" + type} on:click={successAction}
        >Ok</button
      >
    </div>
  {/if}
</div>
