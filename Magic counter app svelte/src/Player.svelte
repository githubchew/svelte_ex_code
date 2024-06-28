<script>
    import {createEventDispatcher} from 'svelte'
    export let score 
    export let winningText;
    export let won
    export let fontColor
    export let gameOver
    const dispatch = createEventDispatcher()
    function minus(){
        dispatch("points", -1)
    }
    function plus(){
        dispatch("points",+1)
    }
</script>
<!-- ------------------------------------------------------ -->
<div class="player" style="color:{fontColor}">
    <h2>score: {score}</h2>
    <button on:click={plus} class="plus" disabled={gameOver}>+</button>
    <button on:click={minus} class="minus" disabled={gameOver}>-</button>
     {#if won}
    <h2>{winningText}</h2>
    {/if}
</div>
<!-- ------------------------------------------------------ -->

<style>
    button[disabled] {
        background-color:gray;
        pointer-events:none;
    }
    .player {
        flex-grow: 1;

    }
    .plus {
        background-color: seagreen;

    }
    .minus {
        background-color: brown;
    }
    button {
        font-size: 20px;
        border-radius: 3px;
        width:40px;
        color:white;
        font-family: monospace;
        font-weight: bold;
    }
</style>