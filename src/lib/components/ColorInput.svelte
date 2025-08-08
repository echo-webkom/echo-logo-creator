<script lang="ts">
	interface Props {
		index: number;
		color: string;
		currentFocus?: number | null;
		onColorChange: (index: number, event: Event) => void;
	}

	let { index, color, currentFocus = null, onColorChange }: Props = $props();
	let inputElement: HTMLInputElement;

	function handleClick() {
		inputElement?.click();
	}
</script>

<div class="flex flex-col items-center gap-2">
	<input
		bind:this={inputElement}
		id="color-{index}"
		type="color"
		value={color}
		oninput={(event) => onColorChange(index, event)}
		class="pointer-events-none absolute opacity-0"
		title="Color {index + 1}"
	/>

	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button
		onclick={handleClick}
		class="h-12 w-12 cursor-pointer rounded-lg border-2 border-gray-200 transition-all hover:border-gray-300 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 focus:outline-none {currentFocus ===
		index
			? 'scale-110 border-blue-300 ring-4 ring-blue-400'
			: ''}"
		style="background-color: {color};"
		title="Color {index + 1}"
	></button>

	<span class="text-xs font-semibold text-gray-700">{index + 1}</span>
</div>
