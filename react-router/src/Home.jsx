import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/data");
  }
  return (
    <div>
      <h1>Home</h1>
      <p>Ini adalah halaman Home</p>
      <button onClick={handleClick}>Go To Data Page</button>
    </div>
  );
}
