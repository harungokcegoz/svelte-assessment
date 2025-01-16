<script lang="ts">
	export let items: [string, string][];
	export let selectedValue: string;
	export let onSelect: (value: string) => void;
	export let type: 'color' | 'icon' = 'color';
	export let label: string;

	function handleSelect(value: string) {
		onSelect(value);
	}
</script>

<div class="space-y-10">
	<span id="{type}-label" class="label mb-2 block">{label}</span>
	<div
		class="mx-auto grid max-w-md grid-cols-5 gap-4"
		role="radiogroup"
		aria-labelledby="{type}-label"
	>
		{#each items as [name, value]}
			<button
				type="button"
				class="mx-auto h-12 w-12 transition-transform hover:scale-110 {type === 'icon'
					? 'flex items-center justify-center rounded'
					: 'rounded-full'}"
				class:border-2={true}
				class:border-gray-600={selectedValue === value}
				class:border-transparent={selectedValue !== value}
				style={type === 'color' ? `background-color: ${value}` : ''}
				on:click={() => handleSelect(value)}
				aria-label="Select {type} {name}"
				aria-pressed={selectedValue === value}
			>
				{#if type === 'icon'}
					{value}
				{/if}
			</button>
		{/each}
	</div>
</div>
