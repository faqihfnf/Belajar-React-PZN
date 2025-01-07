import React from "react";

export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld() {
  const text = "Hello World";
  return <h1 style={{ color: "red" }}>{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "Selamat belajar react dasar";
  return <p>{text.toLowerCase()}</p>;
}
