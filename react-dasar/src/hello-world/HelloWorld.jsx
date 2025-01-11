import React from "react";
import "./HelloWorls.css";

export default function HelloWorld() {
  const props = {
    text: "Hello World dari spread props",
  };
  return (
    <div>
      <HeaderHelloWorld props={{ text: "Hello World" }} />
      <TextHelloworld />
      <ParagraphHelloWorld />
      <SpreadHelloWorld {...props} />
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
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "Selamat belajar react dasar";
  return <p className="content">{text.toLowerCase()}</p>;
}

function SpreadHelloWorld({ text = "Default Text" }) {
  return <p>{text.toLowerCase()}</p>;
}
