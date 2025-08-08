<script lang="ts">
	interface Props {
		colors: Array<string>;
		currentFocus: number | null;
	}

	let { colors, currentFocus = $bindable() }: Props = $props();

	function getPathStyles(index: number): string {
		return `fill: ${colors[index]}; stroke: ${currentFocus === index ? '#3b82f6' : 'transparent'}; stroke-width: ${currentFocus === index ? '3' : '0'}; cursor: pointer; transition: all 0.2s ease; filter: ${currentFocus === index ? 'brightness(1.1)' : 'none'};`;
	}
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
		<path d="M0 0H58V29H29L0 0Z" style={getPathStyles(0)} onclick={() => (currentFocus = 0)} />
		<path
			d="M145 87H88V58H116L145 87Z"
			style={getPathStyles(1)}
			onclick={() => (currentFocus = 1)}
		/>
		<path
			d="M29 29H87L116 58H58L29 29Z"
			style={getPathStyles(2)}
			onclick={() => (currentFocus = 2)}
		/>
		<path
			d="M58.0001 0L87 29H58.0001V0Z"
			style={getPathStyles(3)}
			onclick={() => (currentFocus = 3)}
		/>
		<path d="M58 58L88 87V58H58Z" style={getPathStyles(4)} onclick={() => (currentFocus = 4)} />
		<path
			d="M135 117H175L155 137L135 117Z"
			style={getPathStyles(5)}
			onclick={() => (currentFocus = 5)}
		/>
		<path
			d="M88 87H145L175 117L118 117L88 87Z"
			style={getPathStyles(6)}
			onclick={() => (currentFocus = 6)}
		/>
		<path
			d="M135 117L155 137L134 158L93 117H135Z"
			style={getPathStyles(7)}
			onclick={() => (currentFocus = 7)}
		/>
		<path
			d="M93 117L134 158H52L93 117Z"
			style={getPathStyles(8)}
			onclick={() => (currentFocus = 8)}
		/>
		<path
			d="M93 117L134 158H52L93 117Z"
			style={getPathStyles(9)}
			onclick={() => (currentFocus = 9)}
		/>
		<path
			d="M93 199L134 158H52L93 199Z"
			style={getPathStyles(10)}
			onclick={() => (currentFocus = 10)}
		/>
		<path
			d="M93 199L134 158H52L93 199Z"
			style={getPathStyles(11)}
			onclick={() => (currentFocus = 11)}
		/>
		<path
			d="M52 158L11 199H93L52 158Z"
			style={getPathStyles(12)}
			onclick={() => (currentFocus = 12)}
		/>
		<path
			d="M52 158L11 199H93L52 158Z"
			style={getPathStyles(13)}
			onclick={() => (currentFocus = 13)}
		/>
		<path
			d="M288 229L229 170H288V229Z"
			style={getPathStyles(14)}
			onclick={() => (currentFocus = 14)}
		/>
		<path
			d="M200 141L259 200H200V141Z"
			style={getPathStyles(15)}
			onclick={() => (currentFocus = 15)}
		/>
	</g>
	<defs>
		<clipPath id="clip0_1_174">
			<rect width="288" height="229" fill="white" />
		</clipPath>
	</defs>
</svg>
