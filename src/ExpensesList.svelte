<script>
  import SectionTitle from "./Title.svelte"
  import Expense from "./Expense.svelte"
  export let expenses = []
</script>
<hr />
<section>
  <SectionTitle title="expense list " />
  <ul>

  {#each expenses as expense, index}
  <Expense {...expense} on:deleteMe  />
    {:else}
    <h2 style="color:yellowgreen">no expenses added</h2>
  {/each}

  </ul>
</section>
<hr />





