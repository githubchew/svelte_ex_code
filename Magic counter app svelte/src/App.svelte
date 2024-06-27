<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <h1>Magic the Gathering Counter App</h1>
  <div id="controls-container"></div>
  <button>Start Game</button>

</main>

<style>
  main {
    width: 80%;
    padding:30px;
    border:solide green 2px;
    margin: 0 auto;
    background-color: wheat;
    margin: 10vh auto;
  }
  #controls-container {
    display:flex;
  }
  button{
    display:block;
    width: 100%;
    margin-top: 20px;
    border: solid salmon 2px;
    border-color: saddlebrown;
    color:rgb(65,45,56);
    font-size: 20px;
    border-radius: 3px;
  }
</style>
