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
	class="flex items-center px-2 py-2 text-sm font-medium rounded-md"
	class:text-white={isActive}
	class:bg-gray-900={isActive}
	class:text-gray-300={!isActive}
	class:hover:bg-gray-700={!isActive}
	class:hover:text-white={!isActive}
>
	<div class="w-6 h-6 mr-3">
		<Icon name={icon} />
	</div>
	{label}
</a> 