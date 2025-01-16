<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import type { Todo } from '$lib/types/types';
	import TodoItem from '$lib/components/TodoItem.svelte';
	import Button from '$lib/components/Button.svelte';

	$: completedTodos = $todoStore.filter((todo: Todo) => todo.completed);
</script>

<div class="mx-auto max-w-7xl rounded-lg bg-white p-8 shadow-md">
	<div class="mb-8 flex items-center justify-between">
		<h1 class="title-large">Completed Todos</h1>
		{#if completedTodos.length > 0}
			<Button variant="danger" onClick={() => todoStore.clearCompleted()} icon="TrashIcon">
				Clear All Completed
			</Button>
		{/if}
	</div>

	<div class="space-y-4">
		{#if completedTodos.length === 0}
			<p class="py-8 text-center text-gray-500">No completed todos yet.</p>
		{:else}
			{#each completedTodos as todo (todo.id)}
				<TodoItem {todo} />
			{/each}
		{/if}
	</div>
</div>
