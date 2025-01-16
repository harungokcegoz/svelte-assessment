<script lang="ts">
	import { page } from '$app/stores';
	import Icon from './icons/Icon.svelte';
	import type { IconName } from '../types/types';

	export let href: string;
	export let icon: IconName;
	export let label: string;

	$: isActive = $page.url.pathname === href;
</script>

<a
	{href}
	class="flex items-center rounded-md px-2 py-2 text-sm font-medium"
	class:text-white={isActive}
	class:bg-gray-900={isActive}
	class:text-gray-300={!isActive}
	class:hover:bg-gray-700={!isActive}
	class:hover:text-white={!isActive}
>
	<div class="mr-3 h-6 w-6">
		<Icon name={icon} />
	</div>
	{label}
</a>
