<script>
  import Player from './Player.svelte'
  let redScore = 20
  let blueScore = 233
  $:  blueWon = redScore <=0
  let redWon = blueScore <=0
  let gameOver  = blueWon || redWon;

  function updateBlueScore(e){
    console.log(e.detail)
    const updateBlueScore = e.detail;
    blueScore += updateBlueScore;
    console.log(blueScore)
  }
  function newGame(){
    alert("new Game")
    redScore = 20
    blueScore = 0
  }
</script>
//------------------------------------------------------@29:00
<main>
  <a href="https://www.youtube.com/watch?v=M_teofI6vKY&list=PLT9tklUafCrKINVnRGFiqMU-b0zFyR6TG">yt links</a>
  <h1>Magic the Gathering Counter App</h1>
  <div id="controls-container">
    //BLUE
    <Player 
    {gameOver}
    on:points={updateBlueScore}
    fontColor="00A" won={blueWon} winningText="blue wins"
    score={blueScore} />
    //RED 
    <Player  {gameOver}
    fontColor="A00" won={redWon} winningText="red w" score={redScore} />
  </div>
  <button on:click={newGame}>Start Game</button>

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
    color:rgb(239, 161, 204);
    font-size: 20px;
    border-radius: 3px;
  }
</style>
