<script>
  import {setContext} from 'svelte'
  import Navbar from "./Navbar.svelte"
  import expenseData from "./expenses"
  import ExpenseList from "./ExpensesList.svelte";
  let expenses = [...expenseData]
  //functions
  function removeExpense(id) {
    expenses = expenses.filter(item => item.id != id)
  }

  //context
  setContext('remove',removeExpense)

  function deleteExpense(event) {
    const {id, name} = event.detail;
    console.log(name)
    console.log(id)
    removeExpense(id)
  }
</script>

<Navbar />
<main class="content">
  <ExpenseList expenses={expenses} on:deleteMe
  ={deleteExpense} />
</main>


