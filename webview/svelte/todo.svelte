<script lang="ts">
	
	//use the dictionary to make it available in the array.
	let newItem = "";
	let completed:any;
	completed = [];
	let todoList:any;
	todoList = [];
	
	class To_Do {
		
	
	i:number = 0;
    dict :{[index:number]: string} = {};
    item!: string;


	addToList() {
		this.dict = [...todoList,{ text: newItem,status: false }];
		newItem = "";
		completed.concat(this.dict);
	}
    
	removeFromList(index: any) {
		todoList.splice(index, 1);
		this.dict = todoList;
	}

	moveFromList() {
		this.dict[0];
		completed.concat(this.dict);
		//dict.splice(index, 1);
		console.log(completed[0]);
		//dict = dict;
		//return completed;
	}
	hello() {
		let a = "hello world";
		return a;
	} 
	}
	export let a = new To_Do();
	
</script>

<!-- <Complete bind:this = {word} /> -->

<input bind:value={newItem} type="text" placeholder="new todo item.." />
<button on:click={a.addToList}>Add</button>

<br />
{#each todoList as item, index}
	<input bind:checked={item.status}  type="checkbox"/>
	<span class:checked={item.status}>{item.text}</span>
	<span on:click={() => a.removeFromList(index)}>❌</span>
	<br />
{/each}


<style> 
	.checked {
        text-decoration: line-through;
    }
</style>
