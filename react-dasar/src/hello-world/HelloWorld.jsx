import React from "react";

export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld props={{ text: "Hello World" }} />
      <TextHelloworld />
      <ParagraphHelloWorld />
    </div>
  );
}

//# contoh props yang tidak di destructuring
function HeaderHelloWorld({ props }) {
  const text = "Hello World";
  return <h1 style={{ color: "red" }}>{props.text.toUpperCase()}</h1>;
}

//# contoh props yang langsung di destructuring
function TextHelloworld({ text = "Default Text" }) {
  return <h1 style={{ color: "blue" }}>{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "Selamat belajar react dasar";
  return <p>{text.toLowerCase()}</p>;
}
