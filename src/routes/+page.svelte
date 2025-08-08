<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import ColorPicker from '$lib/components/ColorPicker.svelte';

	const defaultColors = [
		'#FEBE10',
		'#FFE6B4',
		'#FFD67B',
		'#FFD67B',
		'#FFD67B',
		'#94C9D2',
		'#94C9D2',
		'#46ACB9',
		'#D9D9D9',
		'#00A0AF',
		'#D9D9D9',
		'#0095A4',
		'#D9D9D9',
		'#008998',
		'#FEBE10',
		'#FFD67B'
	];

	let colors = $state<Array<string>>(defaultColors);
	let currentFocus = $state<number | null>(null);

	function reset() {
		colors = [...defaultColors];
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

	function handlePathClick(index: number) {
		currentFocus = index;
	}

	function handleReset() {
		reset();
		currentFocus = null;
	}
</script>

<main class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
	<div class="mx-auto max-w-7xl">
		<header class="mb-8 text-center">
			<h1 class="mb-2 text-4xl font-bold text-gray-900">Echo Logo Editor</h1>
			<p class="text-lg text-gray-600">Customize your logo colors with the interactive editor</p>
		</header>

		<div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-center">
			<div class="lg:max-w-md">
				<div class="rounded-xl bg-white p-8 border border-gray-200 flex items-center justify-center">
					<Logo {colors} bind:currentFocus />
				</div>
				
				<div class="mt-6 flex justify-center gap-4">
					<button
						onclick={handleReset}
						class="rounded-lg bg-gray-600 px-6 py-2 font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
					>
						Reset Colors
					</button>
					<button
						onclick={handleDownload}
						class="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Download SVG
					</button>
				</div>
			</div>

			<div class="lg:w-80">
				<ColorPicker bind:colors {currentFocus} />
			</div>
		</div>
	</div>
</main>
