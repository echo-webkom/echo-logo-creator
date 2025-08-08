<script lang="ts">
	interface Props {
		colors: Array<string>;
		currentFocus: number | null;
	}

	let { colors, currentFocus = $bindable() }: Props = $props();

	function getPathStyles(index: number): string {
		return `fill: ${colors[index]}; stroke: ${currentFocus === index ? '#3b82f6' : 'transparent'}; stroke-width: ${currentFocus === index ? '3' : '0'}; cursor: pointer; transition: all 0.2s ease; filter: ${currentFocus === index ? 'brightness(1.1)' : 'none'};`;
	}

	let ds = [
		'M0 0H58V29H29L0 0Z',
		'M29 29H87L116 58H58L29 29Z',
		'M58.0001 0L87 29H58.0001V0Z',
		'M58 58L88 87V58H58Z',
		'M145 87H88V58H116L145 87Z',
		'M135 117H175L155 137L135 117Z',
		'M88 87H145L175 117L118 117L88 87Z',
		'M135 117L155 137L134 158L93 117H135Z',
		'M93 117L134 158H52L93 117Z',
		'M93 199L134 158H52L93 199Z',
		'M52 158L11 199H93L52 158Z',
		'M200 141L259 200H200V141Z',
		'M288 229L229 170H288V229Z'
	];
</script>

<svg
	width="288"
	height="229"
	viewBox="0 0 288 229"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class="h-auto max-w-full"
>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<g clip-path="url(#clip0_1_174)">
		<rect width="288" height="229" fill="white" />
		{#each ds as d, index}
			<path {d} style={getPathStyles(index)} onclick={() => (currentFocus = index)} />
		{/each}
	</g>
	<defs>
		<clipPath id="clip0_1_174">
			<rect width="288" height="229" fill="white" />
		</clipPath>
	</defs>
</svg>
