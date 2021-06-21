<script>
  import Icon from "./icon.svelte";
  import { currentTheme } from "./../store/theme.js";
  import { createEventDispatcher, onDestroy } from "svelte";
  // initializing variables
  let c;
  let themes = [
    { name: "light", icon: "sun" },
    { name: "forest", icon: "globe" },
    { name: "dracula", icon: "fire" },
    { name: "lofi", icon: "tag" },
    { name: "halloween", icon: "zap" },
    { name: "bumblebee", icon: "sparkles" },
    { name: "cupcake", icon: "heart" },
    { name: "valetine", icon: "smile" },
    { name: "corporate", icon: "database" },
    { name: "emerald", icon: "globe" },
    { name: "wireframe", icon: "fire" },
  ];
  const unsubscribe = currentTheme.subscribe((value) => {
    c = value;
  });
  // dispatch event to change theme
  const dispatch = createEventDispatcher();
  function changeTheme() {
    dispatch("changeTheme");
  }
  onDestroy(() => {
    unsubscribe;
  });
</script>

<div data-tip={themes[c].name} class="tooltip tooltip-bottom">
  <button
    tabindex="0"
    class="btn  btn-outline mr-3 "
    on:click={changeTheme}
  >
    <Icon name={themes[c].icon} />
  </button>
</div>
