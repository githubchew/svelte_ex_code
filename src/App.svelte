<script>
  import Navbar from "./Navbar.svelte"
  import Title from "./Title.svelte"
  let fruits = ["apple", "orange", "lemon", "goose","sino"]
</script>

<Navbar />

{#each fruits as item}
<Title title={item}/>
 <h3> {item}</h3>
{/each}