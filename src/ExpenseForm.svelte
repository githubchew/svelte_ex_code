<script>
  import Title from "./Title.svelte";
  export let name = ''
  export let amount = null;
  export let addExpense;
  export let isEditing;
  export let editExpense;
  export let hideForm;
  $: isEmpty = !name || !amount

 function handleSubmit(e){
  if (isEditing) {
    editExpense({name,amount})
  } else {
    addExpense({amount,name})
    name = "";
    amount = null;
  }
 } 

</script>
<br />
<p>name:{name}</p>
<p>amount:{amount}</p>
<section>
  <Title title="add expense pls"></Title> 
  <form class="expense-form" on:submit|preventDefault={handleSubmit}>
    <button style="background-color:darkolivegreen" on:click={hideForm}>close X</button>
    <div class="form-control">
      <label for="name">name</label>
      <input type="text" id="name" bind:value={name} />
    </div>
    
    <div class="form-control">
      <label for="amount">amount</label>
      <input type="number" id="amount" bind:value={amount}/>
    </div>
    
    {#if isEmpty}
     <p class="form-empty" style="color:red ">pls fill out all the form fields</p>
    {/if}
    


<button type="submit" class:disabled={isEmpty} disabled={isEmpty}>
  {#if  isEditing}edit expense 
  {:else} add expense
  {/if}
</button>
 </form>
</section>
<br />

<style>
  .disabled{
    color:pink;
  }
</style>