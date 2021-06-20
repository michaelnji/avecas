<script>
  import { fly, fade } from "svelte/transition";
  import Icon from "./icon.svelte";
  let activeTab, closedClass;
  closedClass =
    "w-screen h-screen hero-overlay md:fixed top-0 grid place-items-center z-50 hidden";

  activeTab = 0;
  function tabbed() {
    if (activeTab == 0) {
      activeTab = 1;
    } else {
      activeTab = 0;
    }
  }
  function closeEditor() {
    closedClass = closedClass + " hidden";
  }
  function openEditor() {
    closedClass =
      "w-screen h-screen hero-overlay md:fixed top-0 grid place-items-center z-50";
  }
</script>

<div
  class="tooltip tooltip-right fixed bottom-14 left-5 z-10"
  data-tip="add new entry"
>
  <button
    class="btn btn-primary shadow-lg btn-lg btn-circle "
    on:click={openEditor}><Icon name="flag" /></button
  >
</div>
<div class={closedClass}>
  <div
    class="border mockup-window border-base-300 w-11/12 lg:w-4/12  mx-auto bg-base-100 my-auto z-50"
  >
    <button
      class="btn absolute top-3 right-3 btn-ghost btn-sm "
      on:click={closeEditor}><Icon name="x" /></button
    >
    <div class=" px-4  py-8 border-t border-base-300">
      <div class="tabs">
        <div
          class:tab-active={activeTab === 0}
          class="tab tab-lifted"
          on:click={tabbed}
        >
          Entry
        </div>
        <div
          class:tab-active={activeTab !== 0}
          class="tab tab-lifted"
          on:click={tabbed}
        >
          Todo
        </div>
      </div>
      {#if activeTab === 0}
        <div in:fade out:fade>
          <h1 class="font-bold text-3xl py-5 ">Add Entry</h1>
          <div class="form-control">
            <label class="label">
              <span class="label-text text-primary">Title</span>
            </label>
            <input
              placeholder="Happy Day "
              class="input input-bordered"
              type="text"
            />
          </div>

          <div class="form-control mt-4">
            <label class="label">
              <span class="label-text text-primary">description</span>
            </label>
            <textarea
              class="textarea h-36 textarea-bordered"
              placeholder="what happened today??"
            />
          </div>

          <div class="w-full flex items-center justify-around mt-6">
            <div class="tooltip tooltip-bottom" data-tip="mood">
              <button class="btn btn-ghost">😍</button>
            </div>
            <div class="form-control w-10/12">
              <input
                type="text"
                placeholder="@tags @happy @important"
                class="input input-bordered"
              />
            </div>
          </div>
          <button class="btn btn-block btn-primary mt-8">Save entry</button>
        </div>
      {:else}
        <div in:fade out:fly>
          <h1 class="font-bold text-3xl py-5 ">Add Todo</h1>
          <div class="form-control">
            <label class="label">
              <span class="label-text text-primary">Title</span>
            </label>
            <input
              placeholder="Clean Windows of basement"
              class="input input-bordered"
              type="text"
            />
          </div>

          <div class="form-control mt-4">
            <label class="label">
              <span class="label-text text-primary">description</span>
            </label>
            <textarea
              class="textarea h-36 textarea-bordered"
              placeholder="Anything to add??"
            />
          </div>

          <div class="form-control w-full mt-4">
            <label class="label">
              <span class="label-text text-primary">tags</span>
            </label>
            <input
              type="text"
              placeholder="@tags @happy @important"
              class="input input-bordered"
            />
          </div>
          <button class="btn btn-block btn-primary mt-8">Add Todo</button>
        </div>
      {/if}
    </div>
  </div>
</div>
