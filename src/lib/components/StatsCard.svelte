<script lang="ts">
	export let label: string;
	export let value: number;
	export let textColor: string = 'text-gray-900';
</script>

<div class="overflow-hidden rounded-lg bg-white shadow">
	<div class="px-4 py-5 sm:p-6">
		<dt class="stats-caption truncate">{label}</dt>
		<dd class="stats mt-1 {textColor}">{value}</dd>
	</div>
</div>
