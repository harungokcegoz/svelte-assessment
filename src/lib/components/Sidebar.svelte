<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="h-full bg-gray-800 flex flex-col">
	<nav class="flex-1 px-2 py-4 space-y-1">
		<a
			href="/"
			class="flex items-center px-2 py-2 text-sm font-medium rounded-md"
			class:text-white={$page.url.pathname === '/'}
			class:bg-gray-900={$page.url.pathname === '/'}
			class:text-gray-300={$page.url.pathname !== '/'}
			class:hover:bg-gray-700={$page.url.pathname !== '/'}
			class:hover:text-white={$page.url.pathname !== '/'}
		>
			<ion-icon 
				name="home-outline" 
				class="mr-3 h-6 w-6"
				aria-hidden="true"
			></ion-icon>
			Home
		</a>

		<a
			href="/todos"
			class="flex items-center px-2 py-2 text-sm font-medium rounded-md"
			class:text-white={$page.url.pathname === '/todos'}
			class:bg-gray-900={$page.url.pathname === '/todos'}
			class:text-gray-300={$page.url.pathname !== '/todos'}
			class:hover:bg-gray-700={$page.url.pathname !== '/todos'}
			class:hover:text-white={$page.url.pathname !== '/todos'}
		>
			<ion-icon 
				name="list-outline" 
				class="mr-3 h-6 w-6"
				aria-hidden="true"
			></ion-icon>
			Incomplete Todos
		</a>

		<a
			href="/todos/create"
			class="flex items-center px-2 py-2 text-sm font-medium rounded-md"
			class:text-white={$page.url.pathname === '/todos/create'}
			class:bg-gray-900={$page.url.pathname === '/todos/create'}
			class:text-gray-300={$page.url.pathname !== '/todos/create'}
			class:hover:bg-gray-700={$page.url.pathname !== '/todos/create'}
			class:hover:text-white={$page.url.pathname !== '/todos/create'}
		>
			<ion-icon 
				name="add-outline" 
				class="mr-3 h-6 w-6"
				aria-hidden="true"
			></ion-icon>
			Create Todo
		</a>

		<a
			href="/todos/completed"
			class="flex items-center px-2 py-2 text-sm font-medium rounded-md"
			class:text-white={$page.url.pathname === '/todos/completed'}
			class:bg-gray-900={$page.url.pathname === '/todos/completed'}
			class:text-gray-300={$page.url.pathname !== '/todos/completed'}
			class:hover:bg-gray-700={$page.url.pathname !== '/todos/completed'}
			class:hover:text-white={$page.url.pathname !== '/todos/completed'}
		>
			<ion-icon 
				name="checkmark-done-outline" 
				class="mr-3 h-6 w-6"
				aria-hidden="true"
			></ion-icon>
			Completed Todos
		</a>
	</nav>
</div> 