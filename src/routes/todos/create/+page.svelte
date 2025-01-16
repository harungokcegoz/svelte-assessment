<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import { presetPastelColors, presetIcons } from '$lib/data/preset-data';
	import Button from '$lib/components/Button.svelte';
	import SelectionGrid from '$lib/components/SelectionGrid.svelte';
	import { goto } from '$app/navigation';
	import type { Todo } from '$lib/types/types';

	let title = '';
	let description = '';
	let selectedColor = '#FFB3BA'; // Default to first color
	let selectedIcon = '📝'; // Default to memo icon

	function handleSubmit() {
		if (!title.trim() || !description.trim()) return;

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
        <Button
            type="submit"
            disabled={!title.trim() || !description.trim()}
            onClick={handleSubmit}
            icon="AddIcon"
        >
            Create Todo
        </Button>
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

		<!-- Color and Icon Selection Container -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<SelectionGrid
				items={[...presetPastelColors]}
				selectedValue={selectedColor}
				onSelect={(value) => (selectedColor = value)}
				type="color"
				label="Select Background Color"
			/>

			<SelectionGrid
				items={[...presetIcons]}
				selectedValue={selectedIcon}
				onSelect={(value) => (selectedIcon = value)}
				type="icon"
				label="Select Icon"
			/>
		</div>
	</form>
</div> 