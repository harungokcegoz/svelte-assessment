<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import { page } from '$app/stores';

	$: totalTodos = $todoStore.length;
	$: incompleteTodos = $todoStore.filter(todo => !todo.completed).length;

	let isMenuOpen = false;
	
	function toggleMenu(): void {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="bg-white shadow-md fixed w-full">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<!-- Mobile menu button -->
				<button
					on:click={toggleMenu}
					class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<ion-icon
						name={isMenuOpen ? "close-outline" : "menu-outline"}
						class="h-6 w-6"
						aria-hidden="true"
					></ion-icon>
				</button>

				<!-- Logo and app name -->
				<div class="flex items-center">
					<ion-icon
						name="checkbox-outline"
						class="text-2xl ml-2 md:ml-0 text-blue-600"
						aria-hidden="true"
					></ion-icon>
					<h1 class="ml-2 text-xl font-bold text-gray-900">Todo App</h1>
				</div>
			</div>

			<!-- Todo counts -->
			<div class="hidden md:flex items-center space-x-4">
				<div class="text-sm text-gray-600">
					<span class="font-medium">{totalTodos}</span> total tasks
				</div>
				<div class="text-sm text-gray-600">
					<span class="font-medium">{incompleteTodos}</span> remaining
				</div>
			</div>
		</div>
	</div>
</header>

<!-- Mobile menu -->
{#if isMenuOpen}
	<div class="md:hidden fixed inset-0 top-16 bg-white border-b border-gray-200">
		<div class="px-2 pt-2 pb-3 space-y-1">
			<a
				href="/"
				class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
				class:bg-gray-100={$page.url.pathname === '/'}
			>
				<div class="flex items-center">
					<ion-icon name="home-outline" class="mr-2 h-5 w-5" aria-hidden="true"></ion-icon>
					Home
				</div>
			</a>
			<a
				href="/todos"
				class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
				class:bg-gray-100={$page.url.pathname === '/todos'}
			>
				<div class="flex items-center">
					<ion-icon name="list-outline" class="mr-2 h-5 w-5" aria-hidden="true"></ion-icon>
					Review Todos
				</div>
			</a>
			<a
				href="/todos/create"
				class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
				class:bg-gray-100={$page.url.pathname === '/todos/create'}
			>
				<div class="flex items-center">
					<ion-icon name="add-outline" class="mr-2 h-5 w-5" aria-hidden="true"></ion-icon>
					Create Todo
				</div>
			</a>
			<a
				href="/todos/completed"
				class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
				class:bg-gray-100={$page.url.pathname === '/todos/completed'}
			>
				<div class="flex items-center">
					<ion-icon name="checkmark-done-outline" class="mr-2 h-5 w-5" aria-hidden="true"></ion-icon>
					Completed Todos
				</div>
			</a>
		</div>
	</div>
{/if} 