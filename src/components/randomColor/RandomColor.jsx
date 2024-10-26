import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#2ebcfe");
  const [colorMode, setColorMode] = useState("hex");
  const randomHexCreator = () => {
    const hexValue = Math.floor(Math.random() * Math.pow(16, 6)).toString(16);
    return `#${hexValue.padStart(6, 0)}`;
  };
  const randomRgbCreator = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };
  const handleGenColor = (mode) => {
    setColorMode(mode);
    const newColor = mode === "hex" ? randomHexCreator() : randomRgbCreator();
    console.log(newColor);
    setColor(newColor);
  };
  return (
    <div
      className={`w-full min-h-screen flex justify-center items-center flex-col gap-4`}
      style={{ backgroundColor: `${color}` }}
    >
      <div>
        <button onClick={() => handleGenColor("hex")} className="border-2 p-4">
          HEX
        </button>
        <button onClick={() => handleGenColor("rgb")} className="border-2 p-4">
          RGB
        </button>
      </div>
      <div className="text-4xl">{colorMode.toUpperCase()}</div>
      <div className="text-4xl">{color}</div>
    </div>
  );
};

export default RandomColor;
