import { useRef } from "react";
import useFetch from "../useFetchHook/Hook/useFetch";

const ScrolltoTopBottom = () => {
  const bottomRef = useRef(null);
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100"
  );
  const handleScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleScrolltoBottom = () => {
    console.log(bottomRef.current)
    bottomRef.current.scrollIntoView({ behaviour: "smooth" })
  };
  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading ...</p>;
  if (data && data.length > 0) {
    return (
      <>
        <h1>Scroll to Top & Bottom</h1>
        <button onClick={handleScrolltoBottom}>Scroll to Bottom</button>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <div ref={bottomRef}></div>
        <button onClick={handleScrolltoTop}>Scroll to Top</button>
      </>
    );
  }
};

export default ScrolltoTopBottom;
