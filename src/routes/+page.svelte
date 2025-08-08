<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import ColorPicker from '$lib/components/ColorPicker.svelte';
	import { DEFAULT_COLORS, type ColorPreset } from '$lib/colors.js';

	let colors = $state<Array<string>>(DEFAULT_COLORS);
	let currentFocus = $state<number | null>(null);
	let currentPreset = $state<string>('Default');

	function reset() {
		colors = [...DEFAULT_COLORS];
	}

	function handleDownload() {
		const svg = document.querySelector('svg');
		if (!svg) {
			alert('No SVG found');
			return;
		}

		const serializer = new XMLSerializer();
		const source = serializer.serializeToString(svg);
		const blob = new Blob([source], { type: 'image/svg+xml' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'echo-logo.svg';
		a.click();
		URL.revokeObjectURL(url);
	}

	function handlePresetChange(preset: ColorPreset) {
		colors = [...preset.colors];
		currentPreset = preset.name;
		currentFocus = null;
	}

	function handleReset() {
		reset();
		currentPreset = 'Default';
		currentFocus = null;
	}
</script>

<main class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
	<div class="mx-auto max-w-7xl">
		<header class="mb-8 text-center">
			<h1 class="mb-2 text-4xl font-bold text-gray-900">echo Logo Creator</h1>
			<p class="text-lg text-gray-600">Customize the logo colors with the interactive editor</p>
		</header>

		<div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-center">
			<div class="lg:max-w-md">
				<div
					class="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-8"
				>
					<Logo {colors} bind:currentFocus />
				</div>

				<div class="mt-6 flex justify-center gap-4">
					<button
						onclick={handleReset}
						class="rounded-lg bg-gray-600 px-6 py-2 font-medium text-white transition-all hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none active:scale-[0.98]"
					>
						Reset Colors
					</button>
					<button
						onclick={handleDownload}
						class="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:scale-[0.98]"
					>
						Download SVG
					</button>
				</div>
			</div>

			<div class="lg:w-80">
				<ColorPicker
					bind:colors
					{currentFocus}
					{currentPreset}
					onPresetChange={handlePresetChange}
				/>
			</div>
		</div>
	</div>
</main>
