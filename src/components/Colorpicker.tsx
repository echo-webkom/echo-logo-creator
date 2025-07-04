import { useEffect, useRef } from "react";
import { useColorsStore } from "../colors.store";

type PickerProps = {
  index: number;
  color: string;
  isFocused?: boolean;
};

const Picker = ({ index, color, isFocused }: PickerProps) => {
  const { setColor } = useColorsStore();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused) {
      ref.current?.click();
    }
  });

  return (
    <div className="relative mx-auto my-auto">
      <input
        ref={ref}
        type="color"
        value={color}
        onChange={(e) => setColor(index, e.target.value)}
        className="w-12 h-12 cursor-pointer transition-colors"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

type ColorPickerProps = {
  currentFocus?: number | null;
};

export function ColorPicker({ currentFocus }: ColorPickerProps) {
  const { colors } = useColorsStore();

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Color Palette
      </h2>
      <div className="grid grid-cols-8 gap-4 p-4 pb-8 bg-gray-50 rounded-lg">
        {colors.map((color, index) => (
          <Picker
            key={index}
            index={index}
            color={color}
            isFocused={currentFocus === index}
          />
        ))}
      </div>
      {Boolean(currentFocus) && (
        <p className="text-sm text-gray-600 mt-2">
          Selected: Color {currentFocus! + 1} ({colors[currentFocus!]})
        </p>
      )}
    </div>
  );
}
