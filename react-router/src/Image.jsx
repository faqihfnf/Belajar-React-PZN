import React from "react";
import { useParams } from "react-router";

export default function Image() {
  const params = useParams();
  return (
    <div>
      <h1>Image {params["*"]}</h1>
      <p>Ini adalah halaman Image</p>
    </div>
  );
}
