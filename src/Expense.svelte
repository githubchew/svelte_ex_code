<script>

  export let id = 0;
  export let name="John Doe";
  export let amount = 0;
  let displayAmount = false;
  export let removeExpense;
  function toogleAmount (){
    displayAmount = !displayAmount;
  }
</script>

<article class="single-expense">

    <div class="expense-info">
      <h2>
        {name}
        <button class="amount-btn" on:click|once={
          toogleAmount 
        }>
          amnt 
        </button>
      </h2>
      {#if displayAmount}
      <h4>amount: ${amount}</h4>
      {/if}
      <button class="expense-btn edit-btn">edit</button>
      <button class="" on:click={removeExpense(id)}>delete</button>
    </div>
    <hr style="border-top:2px dashed green" />

</article>


<style>
  .expense-info{
    display:flex;
    justify-content: space-between;
  }
</style>