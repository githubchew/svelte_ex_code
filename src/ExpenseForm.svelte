<script>
  import Title from "./Title.svelte";
  let name = ''
  let amount = null;
  $: isEmpty = !name || !amount

  if (isEmpty) {
    alert("please input name")
  }
  
</script>

<p>name:{name}</p>
<p>amount:{amount}</p>
<section>
  <Title title="add expense pls"></Title> 
  <form >
    <button style="background-color:darkolivegreen">close X</button>
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
    


<button type="submit" class:disabled={isEmpty} disabled={isEmpty}> add expense</button>
 </form>
</section>


<style>
  .disabled{
    color:pink;
  }
</style>