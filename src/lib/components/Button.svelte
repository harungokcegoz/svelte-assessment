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
	class="button-text inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:h-12 {variantStyles[
		variant
	]}"
>
	{#if icon}
		<div class="h-6 w-6 text-white">
			<Icon name={icon} />
		</div>
	{/if}
	<slot />
</button>
