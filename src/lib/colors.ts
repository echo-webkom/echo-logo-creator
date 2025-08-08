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
	'#FF4500',
	'#FFB347',
	'#FF6347',
	'#FF8C00',
	'#FFA500',
	'#4B0082',
	'#800080',
	'#9932CC',
	'#000000',
	'#2F4F4F',
	'#696969',
	'#1C1C1C',
	'#333333'
];

export const CHRISTMAS_COLORS = [
	'#C41E3A',
	'#DC143C',
	'#B22222',
	'#8B0000',
	'#FF6B6B',
	'#228B22',
	'#006400',
	'#32CD32',
	'#90EE90',
	'#2E8B57',
	'#FFD700',
	'#FFA500',
	'#FFFACD'
];

export interface ColorPreset {
	name: string;
	colors: Array<string>;
}

export const COLOR_PRESETS: ColorPreset[] = [
	{ name: 'Default', colors: DEFAULT_COLORS },
	{ name: 'Halloween', colors: HALLOWEEN_COLORS },
	{ name: 'Christmas', colors: CHRISTMAS_COLORS }
];
