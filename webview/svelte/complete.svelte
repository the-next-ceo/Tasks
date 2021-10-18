<script>
	import Todo from "./todo.svelte";
	let word;
// check out for the out directory
	//let index = "hello world";
	//export let a = word.addToList;
</script>

<Todo bind:this={word} />

<button on:click={() => word.moveFromList()}>Do Stuff</button>

<body>
	<!-- {word.hello} -->
</body>~