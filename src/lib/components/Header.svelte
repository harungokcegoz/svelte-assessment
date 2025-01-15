<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import { page } from '$app/stores';

	$: totalTodos = $todoStore.length;
	$: incompleteTodos = $todoStore.filter(todo => !todo.completed).length;

	let isHamburgerMenuOpen = false;
	
	function toggleHamburgerMenu(): void {
		isHamburgerMenuOpen = !isHamburgerMenuOpen;
	}

	function closeHamburgerMenu(): void {
		isHamburgerMenuOpen = false;
	}

    const navClassStyle = 'nav-text block px-3 py-2 rounded-md text-white'
</script>

<header class="bg-white shadow-md fixed  w-full z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center justify-between w-full md:w-auto">
				<!-- Logo and app name -->
				<a class="flex items-center" href="/">
					<ion-icon
						name="checkbox-outline"
						class="text-xl md:text-2xl ml-2 md:ml-0 text-blue-600"
						aria-hidden="true"
					></ion-icon>
					<h1 class="ml-2 title-base">Todo App</h1>
                </a>

                <!-- Mobile menu button -->
                <button
					on:click={toggleHamburgerMenu}
					class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<ion-icon
						name={isHamburgerMenuOpen ? "close-outline" : "menu-outline"}
						class="h-6 w-6"
						aria-hidden="true"
					></ion-icon>
				</button>
			</div>

			<!-- Todo counts -->
			<div class="hidden md:flex items-center space-x-4">
				<div class="text-secondary">
					<span class="font-medium">{totalTodos}</span> total tasks
				</div>
				<div class="text-secondary">
					<span class="font-medium">{incompleteTodos}</span> remaining
				</div>
			</div>
		</div>
	</div>
</header>

<!-- Mobile menu -->
{#if isHamburgerMenuOpen}
	<div class="md:hidden fixed inset-0 top-16 border-b border-gray-200 bg-gray-800 z-50">
		<div class="px-2 pt-2 pb-3 space-y-1 h-full">
			<a
				href="/"
				on:click={closeHamburgerMenu}
				class={`${navClassStyle} ${$page.url.pathname === '/' ? 'bg-gray-100 !text-black' : ''}`}
			>
				<div class="flex items-center">
					<ion-icon name="home-outline" class="mr-2 h-5 w-5" aria-hidden="true"></ion-icon>
					Home
				</div>
			</a>
			<a
				href="/todos"
				on:click={closeHamburgerMenu}
				class={`${navClassStyle} ${$page.url.pathname === '/todos' ? 'bg-gray-100 !text-black' : ''}`}
			>
				<div class="flex items-center">
					<ion-icon name="list-outline" class="mr-2 h-5 w-5" aria-hidden="true"></ion-icon>
					Review Todos
				</div>
			</a>
			<a
				href="/todos/create"
				on:click={closeHamburgerMenu}
				class={`${navClassStyle} ${$page.url.pathname === '/todos/create' ? 'bg-gray-100 !text-black' : ''}`}
			>
				<div class="flex items-center">
					<ion-icon name="add-outline" class="mr-2 h-5 w-5" aria-hidden="true"></ion-icon>
					Create Todo
				</div>
			</a>
			<a
				href="/todos/completed"
				on:click={closeHamburgerMenu}
				class={`${navClassStyle} ${$page.url.pathname === '/todos/completed' ? 'bg-gray-100 !text-black' : ''}`}
			>
				<div class="flex items-center">
					<ion-icon name="checkmark-done-outline" class="mr-2 h-5 w-5" aria-hidden="true"></ion-icon>
					Completed Todos
				</div>
			</a>
		</div>
	</div>
{/if} 