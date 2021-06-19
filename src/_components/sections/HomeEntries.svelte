<script>
  import SimpleCard from "../simpleCard.svelte";
  let tag = [
    {
      text: "10",
    },
    {
      type: "error",
      text: "201",
    },
    {
      text: "10",
    },
    {
      type: "error",
      text: "201",
    },
    {
      text: "10",
    },
    {
      type: "error",
      text: "201",
    },
  ];
</script>

<div class="artboard">
  <div class="grid grid-cols-2">
    <SimpleCard
      title="lorem ipsum dolor"
      desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quis facilis vel, tempora tenetur"
      tags={tag}
      date="Saturday 10 August, 2021"
    />
  </div>
</div>
