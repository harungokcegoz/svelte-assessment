<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import StatsCard from '$lib/components/StatsCard.svelte';
	import QuickActionLink from '$lib/components/QuickActionLink.svelte';

	$: totalTodos = $todoStore.length;
	$: completedTodos = $todoStore.filter(todo => todo.completed).length;
	$: incompleteTodos = totalTodos - completedTodos;
</script>

<div class="bg-white rounded-lg shadow p-8 sm:px-6 w-full max-w-7xl mx-auto">
	<div class="border-b border-gray-200 pb-5">
		<h3 class="title-large">Welcome to Todo App</h3>
		<p class="mt-2 max-w-4xl text-secondary">
			Organize your tasks efficiently with our modern todo application.
		</p>
	</div>

	<div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
		<StatsCard 
			label="Total Todos" 
			value={totalTodos} 
		/>
		<StatsCard 
			label="Completed" 
			value={completedTodos} 
			textColor="text-green-600" 
		/>
		<StatsCard 
			label="Remaining" 
			value={incompleteTodos} 
			textColor="text-blue-600" 
		/>
	</div>

	<div class="mt-8">
		<div class="flex items-center justify-between">
			<h4 class="title-base">Quick Actions</h4>
		</div>
		<div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
			<QuickActionLink
				href="/todos/create"
				icon="AddIcon"
				bgColor="bg-blue-500"
				title="Create New Todo"
				description="Add a new task to your list"
			/>
			<QuickActionLink
				href="/todos"
				icon="ListIcon"
				bgColor="bg-green-500"
				title="Incomplete Todos"
				description="View and manage your incomplete tasks"
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-gray-100 min-h-screen;
	}
</style>
