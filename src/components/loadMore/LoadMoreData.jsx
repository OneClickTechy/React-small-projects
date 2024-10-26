import axios from "axios";
import { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [skipCount, setSkipCount] = useState(0);
  const [canLoad, setCanLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // 'https://dummyjson.com/products?limit=10&skip=10'

  const BASE_URL = "https://dummyjson.com/products";
  const limit = 20;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${BASE_URL}?limit=${limit}&skip=${skipCount}`
        );
        if (response.data.products) {
          setIsLoading(false);
          setProducts((prev) => [...prev, ...response.data.products]);
        }
        console.log("Data Fetched");
        console.log(response.data.products);
      } catch (error) {
        setIsLoading(false);
        console.error(error.message);
        setError(error.message);
      }
    };
    fetchProducts();
  }, [skipCount]);
  useEffect(() => {
    if (products.length >= 100) {
      setCanLoad(false);
    }
  }, [products]);
  const handleLoadData = () => {
    setSkipCount((prevSkipCount) => prevSkipCount + limit);
  };
  if (isLoading) return <div>Loading ....</div>;
  return (
    <div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <figure
              key={product.id}
              className="border-2 border-gray-600 gap-2 flex flex-col justify-center items-center"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                draggable={false}
              />
              <figcaption className="text-center">{product.title}</figcaption>
            </figure>
          ))}
      </div>
      <div>
        {products && products.length ? (
          <button
            className={canLoad ? "" : "text-red-500"}
            type="button"
            disabled={!canLoad}
            onClick={handleLoadData}
          >
            {canLoad ? "Load More" : "Max Reached"}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
