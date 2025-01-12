import React from "react";

export default function SayHelloForm() {
  // contoh ini menggunakan DOM Manipulation, dan ini tidak disarankan. yang disarankan adalah menggunakan STATE!!
  function handleClick(e) {
    e.preventDefault();
    const name = document.getElementById("input_name").value;
    document.getElementById("text_hello").innerHTML = "Hello " + name;
  }
  return (
    <div>
      <form>
        <input type="text" id="input_name" />
        <button onClick={handleClick}>Say Hello</button>
      </form>
      <h1 id="text_hello">Hello World</h1>
    </div>
  );
}
