import { useEffect } from "react";
import useFetch from "./Hook/useFetch";

const HookTest = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100"
  );
  console.log(data);
  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading ...</p>;
  if (data && data.length > 0) {
    return (
      <>
      <h1>useFetch Custom Hook</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      </>
    );
  }
};

export default HookTest;
