<script>
    let count = 0;

    function Increment_Function(){
        count ++;
    }

</script>

<button on:click={Increment_Function}>
    count is {count}
</button>

<style>
    button {
        padding: 10px;
        background-color: rgb(87, 51, 21);
        color: white;
        border: none;
        border-radius: 5px;
        will-change: filter;
        transition: filter 300ms;
        margin: 30px;
        cursor: pointer;
    }

    button:hover {
        filter: drop-shadow(0 0 2em #f7f7f7d0);
    }
</style>
  