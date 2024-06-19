<script>
  import Navbar from "./Navbar.svelte"
  import expenseData from "./expenses"
  import ExpenseList from "./ExpensesList.svelte";
  let expenses = [...expenseData]
  //functions
  function removeExpense(id) {
    expenses = expenses.filter(item => item.id != id)
  }

</script>

<Navbar />
<main class="content">
  <ExpenseList expenses={expenses} {removeExpense}/>
</main>


