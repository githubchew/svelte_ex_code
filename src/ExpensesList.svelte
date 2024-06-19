<script>
  import SectionTitle from "./Title.svelte"
  import Expense from "./Expense.svelte"
  export let expenses = []
  export let removeExpense
</script>
<hr />
<section>
  <SectionTitle title="expense list " />
  <ul>

  {#each expenses as expense, index}
  <Expense {...expense} {removeExpense} />

  {/each}

  </ul>
</section>
<hr />





