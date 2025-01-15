<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
    import type { Todo } from '$lib/stores/todoStore';

    export let todo: Todo;

	let player: any;
	let isCompleting = false;

	async function handleToggle() {
		if (!todo.completed) {
			isCompleting = true;
			if (player) {
				player.stop();
				player.play();
                await new Promise((resolve) => {
                    player.addEventListener('complete', () => {
                        resolve(true);
                    });
                });
                todoStore.toggleTodo(todo.id);
			}
		} else {
            todoStore.toggleTodo(todo.id);
        }
	}

	function handleDelete() {
		todoStore.deleteTodo(todo.id);
	}

	function handleDotLottieLoad(dotLottie: any) {
		player = dotLottie;
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
            on:click={handleToggle}
            class="flex-shrink-0 group relative rounded-full hover:ring-2 hover:ring-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        >
            <div
                class="h-6 w-6 rounded-full border-2 border-gray-400 group-hover:border-gray-500 transition-colors flex items-center justify-center"
                class:bg-gray-500={todo.completed || isCompleting}
            >
                {#if todo.completed || isCompleting}
                    <ion-icon 
                        name="checkmark-outline" 
                        class="text-white text-sm"
                        style="margin-top: 1px;"
                    ></ion-icon>
                {/if}
            </div>
        </button>

		<!-- Todo Content -->
		<div class="flex-1 min-w-0">
			<div class="flex items-center gap-2">
				<span class="text-xl sm:text-2xl">{todo.icon}</span>
				<h3
					class="text-primary font-medium truncate transition-colors"
					class:line-through={todo.completed || isCompleting}
					class:text-gray-500={todo.completed || isCompleting}
				>
					{todo.title}
				</h3>
			</div>
			{#if todo.description}
				<p
					class="mt-1 text-secondary truncate transition-colors"
					class:line-through={todo.completed || isCompleting}
					class:text-gray-400={todo.completed || isCompleting}
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
				<ion-icon name="trash-outline" class="text-xl text-red-500"></ion-icon>
			</button>
		</div>
	</div>

	<!-- Confetti Animation -->

</div> 