<script>
  import {setContext} from 'svelte'
  import Navbar from "./Navbar.svelte"
  import expenseData from "./expenses"
  import ExpenseList from "./ExpensesList.svelte";
  import Totals from './Totals.svelte'
  let expenses = [...expenseData]
  // reactive
  $:total = expenses.reduce(   (acc,curr)=>{
    console.log( {acc,amount:curr.amount} )
    return (acc +=curr.amount)
  }  ,    0);

  //functions
  function removeExpense(id) {
    expenses = expenses.filter(item => item.id != id)
  }

 function clearExpenses(){
  expenses =[]
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
  <Totals title="total expenses" {total} />
  <ExpenseList expenses={expenses} on:deleteMe
  ={deleteExpense} />
<button type="button" style="width:100% " on:click={clearExpenses}>clear</button>
</main>


