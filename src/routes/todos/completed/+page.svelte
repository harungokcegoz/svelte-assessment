<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import type { Todo } from '$lib/types/types';
	import TodoItem from '$lib/components/TodoItem.svelte';
	import Button from '$lib/components/Button.svelte';

	$: completedTodos = $todoStore.filter((todo: Todo) => todo.completed);
</script>

<div class="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
	<div class="flex justify-between items-center mb-8">
		<h1 class="title-large">Completed Todos</h1>
		{#if completedTodos.length > 0}
			<Button
				variant="danger"
				onClick={() => todoStore.clearCompleted()}
				icon="TrashIcon"
			>
				Clear All Completed
			</Button>
		{/if}
	</div>

	<div class="space-y-4">
		{#if completedTodos.length === 0}
			<p class="text-gray-500 text-center py-8">No completed todos yet.</p>
		{:else}
			{#each completedTodos as todo (todo.id)}
				<TodoItem {todo} />
			{/each}
		{/if}
	</div>
</div> 