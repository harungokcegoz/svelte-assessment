<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import { presetPastelColors, presetIcons } from '$lib/data/preset-data';
	import Icon from '$lib/components/icons/Icon.svelte';
	import { goto } from '$app/navigation';
	import type { Todo } from '$lib/stores/todoStore';

	let title = '';
	let description = '';
	let selectedColor = '#FFB3BA'; // Default to first color
	let selectedIcon = '📝'; // Default to memo icon

	function handleSubmit() {
		if (!title.trim()) return;

		const newTodo: Todo = {
			id: crypto.randomUUID(),
			title: title.trim(),
			description: description.trim(),
			completed: false,
			createdAt: new Date(),
			bgColor: selectedColor,
			icon: selectedIcon
		};

		todoStore.addTodo(newTodo);
		goto('/todos');
	}
</script>

<div class="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
    <div class="flex justify-between items-center">
	    <h1 class="title-large">Create New Todo</h1>
    
        <!-- Submit button -->
        <button
            type="submit"
            class="button-text flex items-center gap-2 justify-center px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed h-8 sm:h-12"
            disabled={!title.trim() || !description.trim() }
            on:click={handleSubmit}
        >
			<div class="w-6 h-6 text-white">
				<Icon name="AddIcon" />
			</div>
            Create Todo
        </button>
    </div>

	<form on:submit|preventDefault={handleSubmit} class="space-y-6">
		<!-- Title input -->
		<div>
			<label for="title" class="block label">Title</label>
			<input
				type="text"
				id="title"
				bind:value={title}
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4"
				required
                placeholder="Enter your task..."
			/>
		</div>

		<!-- Description input -->
		<div>
			<label for="description" class="block label">Description</label>
			<textarea
				id="description"
				bind:value={description}
				rows="3"
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4"
				placeholder="Enter your description..."
			></textarea>
		</div>

		<!-- Color selection -->
		<div>
			<span id="color-label" class="block label mb-2">Select Background Color</span>
			<div class="grid grid-cols-5 gap-2" role="radiogroup" aria-labelledby="color-label">
				{#each [...presetPastelColors] as [name, color]}
					<button
						type="button"
						class="w-10 h-10 rounded-full border-2 transition-transform hover:scale-110"
						style="background-color: {color}; border-color: {selectedColor === color ? '#4B5563' : 'transparent'}"
						on:click={() => (selectedColor = color)}
						aria-label="Select color {name}"
						aria-pressed={selectedColor === color}
					></button>
				{/each}
			</div>
		</div>

		<!-- Icon selection -->
		<div>
			<span id="icon-label" class="block label mb-2">Select Icon</span>
			<div class="grid grid-cols-8 gap-2" role="radiogroup" aria-labelledby="icon-label">
				{#each [...presetIcons] as [name, icon]}
					<button
						type="button"
						class="w-10 h-10 flex items-center justify-center rounded border-2 transition-transform hover:scale-110 text-xl"
						class:border-gray-600={selectedIcon === icon}
						class:border-transparent={selectedIcon !== icon}
						on:click={() => (selectedIcon = icon)}
						aria-label="Select icon {name}"
						aria-pressed={selectedIcon === icon}
					>{icon}</button>
				{/each}
			</div>
		</div>
	</form>
</div> 