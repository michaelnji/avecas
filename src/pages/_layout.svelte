<script>
  import TopNavbar from "./../_components/topNavbar.svelte";
  import FadeDecorator from "../_components/fadeDecorator.svelte";
  import Navbar from "./../_components/navbar.svelte";
  import { onDestroy, onMount } from "svelte";
  import { currentTheme } from "../store/theme";
  // localStorage
  const db = localStorage;
  // initializing variables
  let b;
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
  // get theme index from local storage and updates store
  onMount(() => {
    if (db.getItem("AVECAS_THEME_MODE") == null) {
      db.setItem("AVECAS_THEME_MODE", 0);
      let c;
      c = 0;
      currentTheme.update((value) => {
        return c;
      });
    } else {
      let currentVal;
      currentVal = JSON.parse(db.getItem("AVECAS_THEME_MODE"));
      currentTheme.update((value) => {
        return currentVal;
      });
    }
  });
  // suscribing to updated theme index
  const unsubscribe = currentTheme.subscribe((value) => {
    b = value;
  });
  // change theme index and update local storage
  function requestThemeHandler() {
    let currentVal;
    currentTheme.update((value) => {
      if (value <= 9) {
        currentVal = value + 1;
      } else {
        currentVal = 0;
      }
      db.setItem("AVECAS_THEME_MODE", currentVal);
      return currentVal;
    });
  }
  onDestroy(() => {
    unsubscribe;
  });
</script>

<!-- routify:options  preload="proximity" -->
<div data-theme={themes[b].name}>
  <TopNavbar on:requestTheme={requestThemeHandler} />
  <div
    class="lg:pt-36 pt-24 pb-14 bg-base-100 text-base-content w-full min-h-screen "
  >
    <slot decorator={FadeDecorator} />
  </div>

  <Navbar />
</div>
