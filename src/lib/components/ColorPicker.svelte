<script lang="ts">
	import ColorInput from './ColorInput.svelte';
	import PresetSelector from './PresetSelector.svelte';
	import type { ColorPreset } from '$lib/colors';

	interface Props {
		colors: string[];
		currentFocus?: number | null;
		currentPreset: string;
		onPresetChange: (preset: ColorPreset) => void;
	}

	let {
		colors = $bindable(),
		currentFocus = null,
		currentPreset,
		onPresetChange
	}: Props = $props();

	function handleColorChange(index: number, event: Event) {
		const target = event.target as HTMLInputElement;
		colors[index] = target.value;
	}

	function openColorPicker(index: number) {
		const input = document.getElementById(`color-${index}`) as HTMLInputElement;
		input?.click();
	}

	$effect(() => {
		if (currentFocus !== null) {
			setTimeout(() => {
				openColorPicker(currentFocus);
			}, 100);
		}
	});
</script>

<div class="rounded-xl border border-gray-200 bg-white p-6">
	<div class="mb-6">
		<h3 class="text-xl font-semibold text-gray-900">Color Palette</h3>
		<p class="mt-1 text-sm text-gray-500">Click on the logo or select colors below</p>
	</div>

	<PresetSelector {currentPreset} {onPresetChange} />
	<div class="grid grid-cols-4 gap-3">
		{#each colors as color, index}
			<ColorInput {index} {color} {currentFocus} onColorChange={handleColorChange} />
		{/each}
	</div>
</div>
