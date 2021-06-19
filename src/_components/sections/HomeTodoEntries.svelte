<script>
  import TodoCard from "./../todoCard.svelte";
  let tag = [
    {
      text: "10",
    },
    {
      type: "error",
      text: "201",
    },
    {
      text: "10009",
    },
    {
      type: "error",
      text: "default",
    },
    {
      text: "10",
    },
    {
      type: "error",
      text: "sulphur",
    },
  ];
</script>

<div class="artboard">
  <div class="grid grid-cols-1">
    <TodoCard todo="Take out the trash" tags={tag} priority="important" />
    <TodoCard todo="Take Mummy home" tags={tag} priority="urgent" />
    <TodoCard todo="Complete Avecas layout" isChecked />
  </div>
</div>
