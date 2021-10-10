<script>
    import Complete from "./complete.svelte";

    let word;
</script>

<Complete bind:this = {word} />

<input bind:value={word.newItem} type="text" placeholder="new todo item.." />
<button on:click={word}>Add</button>

<br />
{#each word.todoList as item, index}
	<input bind:checked={item.status} on:click={() => word.moveFromList(index)} type="checkbox"/>
	<span class:checked={item.status}>{item.text}</span>
	<span on:click={() => word.removeFromList(index)}>❌</span>
	<br />
{/each}


<style> 
	.checked {
        text-decoration: line-through;
    }
</style>
