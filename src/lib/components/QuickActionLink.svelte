<script lang="ts">
	import Icon from './icons/Icon.svelte';
	import type { IconName } from '../types/types';

	export let href: string;
	export let icon: IconName;
	export let bgColor: string = 'bg-blue-500';
	export let title: string;
	export let description: string;
</script>

<a
	{href}
	class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
>
	<div
		class="flex-shrink-0 h-10 w-10 rounded-full {bgColor} flex items-center justify-center"
	>
		<div class="w-6 h-6 text-white">
			<Icon name={icon} />
		</div>
	</div>
	<div class="flex-1 min-w-0">
		<span class="absolute inset-0" aria-hidden="true"></span>
		<p class="text-primary font-medium">{title}</p>
		<p class="text-secondary">{description}</p>
	</div>
</a> 