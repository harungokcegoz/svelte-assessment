<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
    import type { Todo } from '$lib/types/types';
	import Icon from '$lib/components/icons/Icon.svelte';

    export let todo: Todo;

	function handleDelete() {
		todoStore.deleteTodo(todo.id);
	}

</script>

<div
	class="p-4 rounded-lg transition-all duration-200 hover:shadow-md relative overflow-hidden"
	style="background-color: {todo.bgColor};"
>
	<!-- Main Content -->
	<div class="flex items-center gap-4">
		<!-- Checkbox -->
        <button
            on:click={() => todoStore.toggleTodo(todo.id)}
            class="flex-shrink-0 group relative rounded-full hover:ring-2 hover:ring-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        >
            <div
                class="h-6 w-6 rounded-full border-2 border-gray-400 group-hover:border-gray-500 transition-colors flex items-center justify-center"
                class:bg-gray-500={todo.completed}
            >
                {#if todo.completed}
                    <div class="w-4 h-4 text-white">
                        <Icon name="CheckIcon" />
                    </div>
                {/if}
            </div>
        </button>

		<!-- Todo Content -->
		<div class="flex-1 min-w-0">
			<div class="flex items-center gap-2">
				<span class="text-xl sm:text-2xl">{todo.icon}</span>
				<h3
					class="text-primary font-medium truncate transition-colors"
					class:line-through={todo.completed}
					class:text-gray-500={todo.completed}
				>
					{todo.title}
				</h3>
			</div>
			{#if todo.description}
				<p
					class="mt-1 text-secondary truncate transition-colors"
					class:line-through={todo.completed}
					class:text-gray-400={todo.completed}
				>
					{todo.description}
				</p>
			{/if}
		</div>

		<!-- Actions -->
		<div class="flex items-center gap-3">
			<span class="text-secondary">
				{new Date(todo.createdAt).toLocaleDateString()}
			</span>
			<button
				on:click={handleDelete}
				class="text-gray-400 hover:text-red-500 focus:outline-none focus:text-red-500 transition-colors"
				aria-label="Delete todo"
			>
				<div class="w-6 h-6 text-red-500">
					<Icon name="TrashIcon" />
				</div>
			</button>
		</div>
	</div>

	<!-- Confetti Animation -->

</div> 