import React, { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  //   const loaded = useRef(false);
  const [loaded, setLoaded] = useState(false);

  function handleClick() {
    console.log("clicked");
    setLoaded(true);
  }

  useEffect(() => {
    console.log("empty array");
  }, []);

  useEffect(() => {
    console.log("mounted");
    if (loaded) {
      fetch("/product.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
    // return () => {
    //   console.log("unmounted");
    // };
  }, [loaded]);

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Product</button>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
