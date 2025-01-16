<script lang="ts">
	import SidebarItem from './SidebarItem.svelte';

	const navItems = [
		{
			href: '/',
			icon: 'HomeIcon',
			label: 'Home'
		},
		{
			href: '/todos',
			icon: 'ListIcon',
			label: 'Incomplete Todos'
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

<div class="h-full bg-gray-800 flex flex-col">
	<nav class="flex-1 px-2 py-4 space-y-1">
		{#each navItems as item}
			<SidebarItem {...item} />
		{/each}
	</nav>
</div> 