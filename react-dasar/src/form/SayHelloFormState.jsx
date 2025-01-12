import React, { useState } from "react";

export default function SayHelloForm() {
  const [name, setName] = useState("");
  function handleClick(e) {
    e.preventDefault();
    setName(name);
  }
  return (
    <div>
      <form>
        <input type="text" id="input_name" />
        <button onClick={handleClick}>Say Hello</button>
        <h1>Hello {name}</h1>
      </form>
    </div>
  );
}
