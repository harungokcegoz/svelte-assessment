<script lang="ts">
    import * as icons from './index';

    export let name: keyof typeof icons;
    export let className = '';

    $: svg = icons[name];
</script>

<div class={className} {...$$restProps}>
    {@html svg}
</div>

<style>
    div :global(svg) {
        width: 100%;
        height: 100%;
    }
</style> 