<!-- your code here -->
<svelte:options tag="tp-test" />

<script>
    export let num = 0;
</script>

<button on:click={ () => num++}>{num}</button>