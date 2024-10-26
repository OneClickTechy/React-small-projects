import { useState } from "react";
import Model from "./Model";

const PopupBox = () => {
  const [boxView, setBoxView] = useState(false);
  const handleToggleBoxView = () => {
    setBoxView(!boxView);
  };
  return (
    <div className="w-full min-h-screen bg-gray-800 flex flex-col justify-center items-center absolute">
      <button className="relative" onClick={handleToggleBoxView}>
        click
      </button>
      {boxView && <Model setBoxView={setBoxView} boxView={boxView}/>}
    </div>
  );
};

export default PopupBox;
