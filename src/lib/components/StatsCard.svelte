<script lang="ts">
	export let label: string;
	export let value: number;
	export let textColor: string = 'text-gray-900';
</script>

<div class="bg-white overflow-hidden shadow rounded-lg">
	<div class="px-4 py-5 sm:p-6">
		<dt class="stats-caption truncate">{label}</dt>
		<dd class="mt-1 stats {textColor}">{value}</dd>
	</div>
</div> 