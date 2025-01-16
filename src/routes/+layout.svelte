<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="flex min-h-screen flex-col bg-gray-100">
	<!-- Header -->
	<Header />

	<!-- Content area -->
	<div class="flex flex-1 pt-16">
		<!-- Sidebar -->
		<div class="hidden w-64 flex-shrink-0 md:block">
			<Sidebar />
		</div>

		<!-- Main content -->
		<main class="flex-1">
			<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				<slot />
			</div>
		</main>
	</div>
</div>
