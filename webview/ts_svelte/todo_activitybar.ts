
import todo from '../svelte/todo.svelte';
import "svelte";

const app = new todo({
  target: document.body,
});

export default app;
