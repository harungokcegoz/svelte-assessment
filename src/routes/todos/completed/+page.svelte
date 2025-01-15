<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import TodoItem from '$lib/components/TodoItem.svelte';

    $: completedTodos = $todoStore.filter(todo => todo.completed);
    $: sortedTodos = [...completedTodos].sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
</script>

<div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
	<div class="flex justify-between items-center border-b border-gray-200 pb-5">
        <div class="flex flex-col">
            <h3 class="title-large">Completed Todos</h3>
            <p class="mt-2 max-w-4xl text-secondary">
                Review your completed tasks here.
            </p>
        </div>
        
        {#if completedTodos.length > 0}
            <button
                on:click={() => todoStore.clearCompleted()}
                class="button-text inline-flex items-center px-4 py-2 h-10 md:h-12 border border-transparent rounded-md bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 button-text"
            >
                Clear All Completed
            </button>
        {/if}
	</div>

	<div class="mt-6">
		{#if completedTodos.length > 0}
			<div class="divide-y divide-gray-200 space-y-4">
				{#each sortedTodos as todo (todo.id)}
					<TodoItem {todo} />
				{/each}
			</div>
		{/if}
	</div>
</div> 