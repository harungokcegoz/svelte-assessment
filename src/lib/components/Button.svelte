<script lang="ts">
	import Icon from './icons/Icon.svelte';
	import type { IconName } from '../types/types';

	export let type: 'submit' | 'button' = 'button';
	export let variant: 'primary' | 'danger' = 'primary';
	export let disabled = false;
	export let icon: IconName | undefined = undefined;
	export let onClick: (() => void) | undefined = undefined;

	const variantStyles = {
		primary: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
		danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
	};
</script>

<button
	{type}
	{disabled}
	on:click={onClick}
	class="button-text inline-flex items-center gap-2 justify-center px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed h-10 md:h-12 {variantStyles[variant]}"
>
	{#if icon}
		<div class="w-6 h-6 text-white">
			<Icon name={icon} />
		</div>
	{/if}
	<slot />
</button> 