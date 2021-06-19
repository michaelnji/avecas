<script>
  import FadeDecorator from "../_components/fadeDecorator.svelte";

  import Navbar from "./../_components/navbar.svelte";
</script>

<!-- routify:options preload="proximity" -->
<slot decorator={FadeDecorator} />
<Navbar />
