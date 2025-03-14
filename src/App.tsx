import { useColorsStore } from "./colors.store";
import { Colorpicker } from "./components/Colorpicker";
import { Logo } from "./components/Logo";

export default function App() {
  const { colors, reset } = useColorsStore();

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

  return (
    <main className="max-w-[450px]  py-20 mx-auto">
      <Colorpicker />

      <div className="w-fit mx-auto">
        <Logo colors={colors} />
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
