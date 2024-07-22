import { create } from "zustand";

export const COLOR_1 = "#FEBE10";
export const COLOR_2 = "#FFE6B4";
export const COLOR_3 = "#FFD67B";
export const COLOR_4 = "#FFD67B";
export const COLOR_5 = "#FFD67B";
export const COLOR_6 = "#94C9D2";
export const COLOR_7 = "#94C9D2";
export const COLOR_8 = "#46ACB9";
export const COLOR_9 = "#D9D9D9";
export const COLOR_10 = "#00A0AF";
export const COLOR_11 = "#D9D9D9";
export const COLOR_12 = "#0095A4";
export const COLOR_13 = "#D9D9D9";
export const COLOR_14 = "#008998";
export const COLOR_15 = "#FEBE10";
export const COLOR_16 = "#FFD67B";

type State = {
  colors: Array<string>;
};

type Actions = {
  setColor: (index: number, color: string) => void;
  reset: () => void;
};

export const useColorsStore = create<State & Actions>()((set) => ({
  colors: [
    COLOR_1,
    COLOR_2,
    COLOR_3,
    COLOR_4,
    COLOR_5,
    COLOR_6,
    COLOR_7,
    COLOR_8,
    COLOR_9,
    COLOR_10,
    COLOR_11,
    COLOR_12,
    COLOR_13,
    COLOR_14,
    COLOR_15,
    COLOR_16,
  ],
  setColor: (index: number, color: string) => {
    set((state) => ({
      colors: [
        ...state.colors.slice(0, index),
        color,
        ...state.colors.slice(index + 1),
      ],
    }));
  },
  reset: () => {
    set((state) => ({
      colors: state.colors.map((color) => color),
    }));
  },
}));
