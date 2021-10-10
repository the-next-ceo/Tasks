
<script lang="ts">
	export let newItem = "";
	export let completed: any[];
	completed = [];

	export let todoList: any[];
	todoList = [];

	export function addToList() {
		todoList = [...todoList, { text: newItem, status: false }];
		newItem = "";
	}
    
	export function removeFromList(index: any) {
		todoList.splice(index, 1);
		todoList = todoList;
	}

	export function moveFromList(index: any) {
		completed.concat(todoList);
		todoList.splice(index, 1);
		todoList = todoList;
		return completed;
	}
	/* export function hello() {
		let a = "hello world";
		return a;
	} */
</script>