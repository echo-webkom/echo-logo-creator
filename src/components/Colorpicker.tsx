import { useColorsStore } from "../colors.store";

export function Colorpicker() {
  const { colors, setColor } = useColorsStore();

  return (
    <div className="p-4 absolute top-0 left-0 flex flex-row gap-2">
      {colors.map((color, index) => (
        <div key={index}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
