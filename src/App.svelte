<script>
  import {setContext} from 'svelte'
  import Navbar from "./Navbar.svelte"
  import expenseData from "./expenses"
  import ExpenseList from "./ExpensesList.svelte";
  import Totals from './Totals.svelte'
  import ExpenseForm  from './ExpenseForm.svelte';
  //variables
  let expenses = [...expenseData]
  //set editing variables
  let setName = '';
  let setAmount = null;
  let setId = null;
  //toggle form variables
  let isFormOpen = false; ////////////////////////////////////////////////
  // reactive
  $: isEditing = setId?true: false;
  $:total = expenses.reduce(   (acc,curr)=>{
    console.log( {acc,amount:curr.amount} )
    return (acc +=curr.amount)
  }  ,    0);

  //functions
  function showForm() {
    isFormOpen = true;
  }
  function hideForm(){
    isFormOpen = false ;
    setName = ''
    setAmount = null;
    setId = null;
  }
  function removeExpense(id) {
    expenses = expenses.filter(item => item.id != id)
  }

 function clearExpenses(){
  expenses =[]
 }
  function addExpense({name,amount}){
    let expense = {id:Math.random()* Date.now(),
      name, amount
    }
    expenses = [...expenses,expense]
  }
  function setModifiedExpense(id) {
    console.log("hello ")
    let expense = expenses.find(item=> item.id === id)
    console.log(expense)
    setId = expense.id;
    setName = expense.name;
    setAmount = expense.amount;
    showForm()
    console.log({ setId, setName, setAmount })
  }
  function editExpense({name,amount}){
    expenses = expenses.map(item => {
      return item.id == setId ? {...item, name,amount } : {...item}
    })
    setId = null;
    setAmount = null;
    setName = ""
  }
  //context
  setContext('remove',removeExpense)
  setContext('modify',setModifiedExpense)

  function deleteExpense(event) {
    const {id, name} = event.detail;
    console.log(name)
    console.log(id)
    removeExpense(id)
  }
</script>
//--------------------------------------------------------------
<p>isEditing ? :{isEditing}</p>
<Navbar {showForm} />
<main class="content">
  <p>below expennse form</p>
  {#if isFormOpen}
  <ExpenseForm {addExpense} name={setName} amount={setAmount} {isEditing} {editExpense} {hideForm} />
  {/if}
  <Totals title="total expenses" {total} />
  <ExpenseList expenses={expenses} on:deleteMe
  ={deleteExpense} />
<button type="button" style="width:100% " on:click={clearExpenses}>clear</button>
</main>


