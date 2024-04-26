<!-- your code here -->
<svelte:options customElement="tp-test" />

<script>
    export let num = 0;
</script>

<button on:click={ () => num++}>{num}</button>