<script lang="ts">
	import { page } from '$app/stores';
	import Icon from './icons/Icon.svelte';
	import type { IconName } from '../types/types';

	export let href: string;
	export let icon: IconName;
	export let label: string;
	export let onItemClick: () => void;

	$: isActive = $page.url.pathname === href;

	const baseClass = 'nav-text block px-3 py-2 rounded-md text-white';
</script>

<a
	{href}
	on:click={onItemClick}
	class={`${baseClass} ${isActive ? 'bg-gray-100 !text-black' : ''}`}
>
	<div class="flex items-center">
		<div class="mr-2 h-5 w-5">
			<Icon name={icon} />
		</div>
		{label}
	</div>
</a>
