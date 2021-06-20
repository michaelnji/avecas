<script>
  import Icon from "./icon.svelte";
  let currentThemeIndex = [0];
  let themes = [
    { name: "light", icon: "sun", color: "primary" },
    { name: "dark", icon: "moon", color: "neutral" },
    { name: "forest", icon: "globe", color: "success" },
    { name: "dracula", icon: "fire", color: "warning" },
    { name: "lofi", icon: "heart", color: "error" },
    { name: "halloween", icon: "zap", color: "accent" },
  ];
</script>

<div class="dropdown">
  <button tabindex="0" class="btn btn-outline mr-3 hidden md:inline-block">
    <Icon name={themes[currentThemeIndex].icon} />
  </button>
  <ul class="border menu dropdown-content bg-base-100 rounded-box w-52">
    {#each themes as theme}
      <li class={"text-" + theme.color}>
        <a
          href="#"
          class="flex w-full text-accent items-center justify-between"
        >
          {theme.name}
          <Icon name={theme.icon} /></a
        >
      </li>
    {/each}
  </ul>
</div>
