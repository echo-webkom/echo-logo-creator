import { useState } from "react";
import { Download, RotateCcw } from "lucide-react";
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
    a.download = "echo-logo.svg";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePathClick = (index: number) => {
    setCurrentFocus(index);
  };

  const handleReset = () => {
    reset();
    setCurrentFocus(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            echo Logo Creator
          </h1>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <ColorPicker currentFocus={currentFocus} />

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md"
              >
                <Download className="w-5 h-5" />
                Download SVG
              </button>

              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors shadow-md"
              >
                <RotateCcw className="w-5 h-5" />
                Reset
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <Logo
              colors={colors}
              onPathClick={handlePathClick}
              selectedPath={currentFocus}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
