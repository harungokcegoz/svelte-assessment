<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import Icon from '$lib/components/icons/Icon.svelte';

	$: totalTodos = $todoStore.length;
	$: completedTodos = $todoStore.filter(todo => todo.completed).length;
	$: incompleteTodos = totalTodos - completedTodos;
</script>

<div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6 w-full max-w-7xl mx-auto">
	<div class="border-b border-gray-200 pb-5">
		<h3 class="title-large">Welcome to Todo App</h3>
		<p class="mt-2 max-w-4xl text-secondary">
			Organize your tasks efficiently with our modern todo application.
		</p>
	</div>

	<div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
		<!-- Total Todos Card -->
		<div class="bg-white overflow-hidden shadow rounded-lg">
			<div class="px-4 py-5 sm:p-6">
				<dt class="stats-caption truncate">Total Todos</dt>
				<dd class="mt-1 stats text-gray-900">{totalTodos}</dd>
			</div>
		</div>

		<!-- Completed Todos Card -->
		<div class="bg-white overflow-hidden shadow rounded-lg">
			<div class="px-4 py-5 sm:p-6">
				<dt class="stats-caption truncate">Completed</dt>
				<dd class="mt-1 stats text-green-600">{completedTodos}</dd>
			</div>
		</div>

		<!-- Incomplete Todos Card -->
		<div class="bg-white overflow-hidden shadow rounded-lg">
			<div class="px-4 py-5 sm:p-6">
				<dt class="stats-caption truncate">Remaining</dt>
				<dd class="mt-1 stats text-blue-600">{incompleteTodos}</dd>
			</div>
		</div>
	</div>

	<div class="mt-8">
		<div class="flex items-center justify-between">
			<h4 class="title-base">Quick Actions</h4>
		</div>
		<div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
			<a
				href="/todos/create"
				class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
			>
				<div
					class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center"
				>
					<div class="w-6 h-6 text-white">
						<Icon name="AddIcon" />
					</div>
				</div>
				<div class="flex-1 min-w-0">
					<span class="absolute inset-0" aria-hidden="true"></span>
					<p class="text-primary font-medium">Create New Todo</p>
					<p class="text-secondary">Add a new task to your list</p>
				</div>
			</a>

			<a
				href="/todos"
				class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
			>
				<div
					class="flex-shrink-0 h-10 w-10 rounded-full bg-green-500 flex items-center justify-center"
				>
					<div class="w-6 h-6 text-white">
						<Icon name="ListIcon" />
					</div>
				</div>
				<div class="flex-1 min-w-0">
					<span class="absolute inset-0" aria-hidden="true"></span>
					<p class="text-primary font-medium">Incomplete Todos</p>
					<p class="text-secondary">View and manage your incomplete tasks</p>
				</div>
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-gray-100 min-h-screen;
	}
</style>
