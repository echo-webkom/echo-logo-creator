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
    <input
      ref={ref}
      type="color"
      value={color}
      onChange={(e) => setColor(index, e.target.value)}
    />
  );
};

type ColorPickerProps = {
  currentFocus?: number | null;
};

export function ColorPicker({ currentFocus }: ColorPickerProps) {
  const { colors } = useColorsStore();

  return (
    <div className="p-4 absolute top-0 left-0 flex flex-row gap-2">
      {colors.map((color, index) => (
        <Picker
          key={index}
          index={index}
          color={color}
          isFocused={currentFocus === index}
        />
      ))}
    </div>
  );
}
