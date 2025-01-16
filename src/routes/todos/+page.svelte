<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import TodoItem from '$lib/components/TodoItem.svelte';

	$: completedTodos = $todoStore.filter((todo) => !todo.completed);
	$: sortedTodos = [...completedTodos].sort((a, b) => {
		return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
	});
</script>

<div class="mx-auto max-w-7xl rounded-lg bg-white p-8 shadow-md">
	<div class="mb-8">
		<h1 class="title-large">Review Tasks</h1>
		<p class="text-secondary mt-2">
			View and manage all your incomplete tasks. Click on a task to mark it as complete.
		</p>
	</div>

	{#if sortedTodos.length === 0}
		<div class="py-12 text-center">
			<p class="text-secondary">No tasks yet. Create your first task to get started!</p>
		</div>
	{:else}
		<div class="space-y-4">
			{#each sortedTodos as todo (todo.id)}
				<TodoItem {todo} />
			{/each}
		</div>
	{/if}
</div>
