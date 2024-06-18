<script>
  import Navbar from "./Navbar.svelte"
  import expenseData from "./expenses"
  let expenses = [...expenseData]
  import ExpenseList from "./ExpensesList.svelte";

</script>

<Navbar />
<main class="content">
  <ExpenseList expenses={expenses}/>
</main>