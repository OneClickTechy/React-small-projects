import { useRef, useState } from "react";
import useOutSideClick from "./hook/useOutSideClick";

const Test = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutSideClick(ref, () => setShowContent(!showContent));
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {showContent ? (
        <div ref={ref}>
          <header>
            <h1>Model Header</h1>
          </header>
          <main>
            <p>Model Content</p>
          </main>
          <footer>
            <small>Model Footer</small>
          </footer>
        </div>
      ) : (
        <button onClick={() => setShowContent(!showContent)}>
          Show Content
        </button>
      )}
    </div>
  );
};

export default Test;
