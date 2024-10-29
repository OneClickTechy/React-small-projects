import { useEffect } from "react";
import useWindowSize from "./Hook/useWindowSize";

const WindowSizeHookTest = () => {
  const window = useWindowSize();
  const { height, width } = window;
  return (
    height &&
    width && (
      <div className="w-full min-h-screen flex flex-col gap-8 justify-center items-center">
        <p className="text-4xl">Width: <span className="text-teal-500" >{width}</span></p>
        <p className="text-4xl">Height:<span  className="text-teal-500"> {height}</span></p>
      </div>
    )
  );
};

export default WindowSizeHookTest;
