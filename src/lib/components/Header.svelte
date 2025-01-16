<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import Icon from '$lib/components/icons/Icon.svelte';
	import MobileMenuItem from './MobileMenuItem.svelte';

	$: totalTodos = $todoStore.length;
	$: incompleteTodos = $todoStore.filter((todo) => !todo.completed).length;

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

<header class="fixed z-50 w-full bg-white shadow-md">
	<div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<div class="flex w-full items-center justify-between md:w-auto">
				<!-- Logo and app name -->
				<a class="flex items-center" href="/">
					<div class="h-6 w-6">
						<Icon name="CheckSquareIcon" />
					</div>
					<h1 class="title-base ml-2">Todo App</h1>
				</a>

				<!-- Mobile menu button -->
				<button
					on:click={toggleHamburgerMenu}
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<div class="h-6 w-6">
						<Icon name={isHamburgerMenuOpen ? 'CloseIcon' : 'MenuIcon'} />
					</div>
				</button>
			</div>

			<!-- Todo counts -->
			<div class="hidden items-center space-x-4 md:flex">
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
	<div class="fixed inset-0 top-16 z-50 border-b border-gray-200 bg-gray-800 md:hidden">
		<div class="h-full space-y-1 px-2 pb-3 pt-2">
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
