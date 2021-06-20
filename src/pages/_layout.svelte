<script>
  import TopNavbar from "./../_components/topNavbar.svelte";
  import FadeDecorator from "../_components/fadeDecorator.svelte";

  import Navbar from "./../_components/navbar.svelte";
</script>

<!-- routify:options  preload="proximity" -->
<div data-theme="desolate">
  <TopNavbar />
  <div class="lg:pt-36 pt-28 pb-14 bg-base-100 text-base-content">
    <slot decorator={FadeDecorator} />
  </div>

  <Navbar />
</div>
