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

<div class="flex h-full flex-col bg-gray-800">
	<nav class="flex-1 space-y-1 px-2 py-4">
		{#each navItems as item}
			<SidebarItem {...item} />
		{/each}
	</nav>
</div>
