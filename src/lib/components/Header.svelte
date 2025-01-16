<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import Icon from '$lib/components/icons/Icon.svelte';
	import MobileMenuItem from './MobileMenuItem.svelte';

	$: totalTodos = $todoStore.length;
	$: incompleteTodos = $todoStore.filter(todo => !todo.completed).length;

	let isHamburgerMenuOpen = false;
	
	function toggleHamburgerMenu(): void {
		isHamburgerMenuOpen = !isHamburgerMenuOpen;
	}

	function closeHamburgerMenu(): void {
		isHamburgerMenuOpen = false;
	}

	const mobileNavItems = [
		{
			href: '/',
			icon: 'HomeIcon',
			label: 'Home'
		},
		{
			href: '/todos',
			icon: 'ListIcon',
			label: 'Review Todos'
		},
		{
			href: '/todos/create',
			icon: 'AddIcon',
			label: 'Create Todo'
		},
		{
			href: '/todos/completed',
			icon: 'CheckIcon',
			label: 'Completed Todos'
		}
	] as const;
</script>

<header class="bg-white shadow-md fixed w-full z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center justify-between w-full md:w-auto">
				<!-- Logo and app name -->
				<a class="flex items-center" href="/">
					<div class="w-6 h-6">
						<Icon name="CheckSquareIcon" />
					</div>
					<h1 class="ml-2 title-base">Todo App</h1>
				</a>

				<!-- Mobile menu button -->
				<button
					on:click={toggleHamburgerMenu}
					class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<div class="w-6 h-6">
						<Icon name={isHamburgerMenuOpen ? "CloseIcon" : "MenuIcon"} />
					</div>
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
			{#each mobileNavItems as item}
				<MobileMenuItem
					href={item.href}
					icon={item.icon}
					label={item.label}
					onItemClick={closeHamburgerMenu}
				/>
			{/each}
		</div>
	</div>
{/if} 