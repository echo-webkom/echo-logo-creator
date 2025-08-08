export const DEFAULT_COLORS = [
	'#fbbf00',
	'#fed879',
	'#fed879',
	'#fed879',
	'#feeabb',
	'#a6cfd9',
	'#a6cfd9',
	'#52adbd',
	'#0f9eaf',
	'#008fa3',
	'#008095',
	'#fed879',
	'#fdbe01'
];

export const HALLOWEEN_COLORS = [
	'#ff8c00',
	'#ffb347',
	'#ffb347',
	'#ffb347',
	'#ffd4a3',
	'#8b4513',
	'#8b4513',
	'#a0522d',
	'#654321',
	'#964b00',
	'#d2691e',
	'#ffb347',
	'#ff8c00'
];

export const CHRISTMAS_COLORS = [
	'#dc143c',
	'#ff6b6b',
	'#ff6b6b',
	'#ff6b6b',
	'#ffcccb',
	'#228b22',
	'#228b22',
	'#32cd32',
	'#006400',
	'#2e8b57',
	'#90ee90',
	'#ff6b6b',
	'#dc143c'
];

export const NEON_COLORS = [
	'#00ffff',
	'#7fff00',
	'#7fff00',
	'#7fff00',
	'#ccffcc',
	'#ff00ff',
	'#ff00ff',
	'#ff1493',
	'#00ff00',
	'#00bfff',
	'#ffff00',
	'#7fff00',
	'#00ffff'
];

export const MONOCHROME_COLORS = [
	'#000000',
	'#333333',
	'#333333',
	'#333333',
	'#666666',
	'#999999',
	'#999999',
	'#cccccc',
	'#e0e0e0',
	'#f0f0f0',
	'#ffffff',
	'#333333',
	'#000000'
];

export interface ColorPreset {
	name: string;
	colors: Array<string>;
}

export const COLOR_PRESETS: ColorPreset[] = [
	{ name: 'Default', colors: DEFAULT_COLORS },
	{ name: 'Halloween', colors: HALLOWEEN_COLORS },
	{ name: 'Christmas', colors: CHRISTMAS_COLORS },
	{ name: 'Neon', colors: NEON_COLORS },
	{ name: 'Monochrome', colors: MONOCHROME_COLORS }
];
