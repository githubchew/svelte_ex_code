<script>

  export let id = 0;
  export let name="John Doe";
  export let amount = 0;
</script>

<article class="single-expense">

    <div class="expense-info">
      <h2>
        {name}
        <button class="amount-btn">
          amnt 
        </button>
      </h2>
      <h4>amount: ${amount}</h4>
      <button class="expense-btn edit-btn">edit</button>
      <button class="">delete</button>
    </div>

</article>