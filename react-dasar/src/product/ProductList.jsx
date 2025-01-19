import React, { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    console.log("mounted");
    if (loaded.current === false) {
      fetch("/product.json")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .then(() => (loaded.current = true));
    }

    return () => {
      console.log("unmounted");
    };
  });

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
