import axios from "axios";
import { useEffect, useState } from "react";

const ScrollBar = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const API_URL = "https://dummyjson.com/products?limit=100";
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(API_URL);
        const data = response.data.products;
        data ? setIsLoading(false) : null;
        data ? setItems(data) : null;
      } catch (error) {
        setIsLoading(false);
        setErrorMessage(error.message);
      }
    };
    fetchItems();
  }, [API_URL]);
  const handleScrollEvent = () => {
    // console.log(
    //   document.documentElement.scrollTop,
    //   document.body.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );
    const main = document.documentElement.scrollHeight;
    const current = document.documentElement.scrollTop;
    const client = document.documentElement.clientHeight;
    const avail = main - client;
    const percentage = (current / avail) * 100;
    setScrollPercentage(percentage);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  if (isLoading) return <div>Loading....</div>;
  if (errorMessage) return <div>{`ERROR: ${errorMessage}`}</div>;
  return (
    <div className="relative">
      <div className="bg-white w-full h-4 sticky top-0 left-0">
        <div
          className={`bg-gradient-to-r from-blue-300 to-blue-950 h-4`}
          style={{
            width: `${scrollPercentage}%`,
          }}
        ></div>
      </div>
      {items.length && items.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
};

export default ScrollBar;
