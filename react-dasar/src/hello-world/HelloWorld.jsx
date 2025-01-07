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
  return <h1>Hello World</h1>;
}

function ParagraphHelloWorld() {
  return <p>Selamat belajar react dasar</p>;
}
