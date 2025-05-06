import { useState } from "react";
import { useColorsStore } from "./colors.store";
import { ColorPicker } from "./components/Colorpicker";
import { Logo } from "./components/Logo";

export default function App() {
  const { colors, reset } = useColorsStore();
  const [currentFocus, setCurrentFocus] = useState<number | null>(null);

  const handleDownload = () => {
    const svg = document.querySelector("svg");
    if (!svg) {
      alert("No SVG found");
      return;
    }
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "logo.svg";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePathClick = (index: number) => {
    setCurrentFocus(index);
  };

  return (
    <main className="max-w-[450px]  py-20 mx-auto">
      <ColorPicker currentFocus={currentFocus} />

      <div className="w-fit mx-auto">
        <Logo colors={colors} onPathClick={handlePathClick} />
      </div>

      <button
        onClick={handleDownload}
        className="py-4 px-6 bg-blue-700 hover:bg-blue-600 mt-10 mx-auto flex text-white rounded-full transition-colors"
      >
        Last ned SVG
      </button>

      <button
        onClick={reset}
        className="py-2 px-5 bg-red-600 hover:bg-red-700 mt-10 mx-auto flex text-white rounded-full transition-colors"
      >
        Nullstill
      </button>
    </main>
  );
}
