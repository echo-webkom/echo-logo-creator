<script lang="ts">
	import { COLOR_PRESETS, type ColorPreset } from '$lib/colors.js';

	interface Props {
		currentPreset: string;
		onPresetChange: (preset: ColorPreset) => void;
	}

	let { currentPreset, onPresetChange }: Props = $props();
</script>

<div class="mb-6">
	<h4 class="mb-3 text-sm font-semibold text-gray-900">Color Presets</h4>
	<div class="overflow-x-auto overflow-y-visible pb-2">
		<div class="flex min-w-fit gap-2">
			{#each COLOR_PRESETS as preset}
				<button
					onclick={() => onPresetChange(preset)}
					class="rounded-lg border-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-all focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 focus:outline-none active:scale-[0.98] {currentPreset ===
					preset.name
						? 'border-blue-500 bg-blue-50 text-blue-700'
						: 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'}"
				>
					{preset.name}
				</button>
			{/each}
		</div>
	</div>
</div>
