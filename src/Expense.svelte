<script>
  import { getContext,createEventDispatcher }  from 'svelte'
  export let id = 0;
  export let name="John Doe";
  export let amount = 0;
  let displayAmount = false;
  function toogleAmount (){
    displayAmount = !displayAmount;
  }
  const removeExpense = getContext("remove")
  const dispatch = createEventDispatcher();
  const setModifiedExpense = getContext("modify")
</script>

<article class="single-expense">

    <div class="expense-info">
      <h2>
        {name}
        <button class="amount-btn" on:click={
          toogleAmount 
        }>
          amnt 
          </button>
      </h2>
      {#if displayAmount}
      <h4>amount: ${amount}</h4>
      {/if}
      <button class="expense-btn edit-btn" on:click={
        ()=>setModifiedExpense(id)
      }>edit</button>
      <button class="" on:click={removeExpense(id)}>delete</button>
      <button on:click={()=> dispatch('deleteMe',{id,name:"hello disp"})}>delte disp</button>
    </div>
    <hr style="border-top:2px dashed green" />

</article>


<style>
  .expense-info{
    display:flex;
    justify-content: space-between;
  }
</style>