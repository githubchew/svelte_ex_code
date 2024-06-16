<script>
  import {time} from  '../stores.jsx' 

const dateFormatter = new Intl.DateTimeFormat('en', {
  hour12: true,
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
})
</script>

<h2>Trhe time is {dateFormatter.format($time)}</h2>

<h2>from Timer.svelte</h2>