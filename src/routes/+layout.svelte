<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="min-h-screen flex flex-col bg-gray-100">
	<!-- Header -->
	<Header />

	<!-- Content area -->
	<div class="flex flex-1 pt-16">
		<!-- Sidebar -->
		<div class="hidden md:block w-64 flex-shrink-0">
			<Sidebar />
		</div>

		<!-- Main content -->
		<main class="flex-1">
			<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
				<slot />
			</div>
		</main>
	</div>
</div>

<style lang="postcss">
	:global(body) {
		@apply overflow-x-hidden;
	}
</style>
