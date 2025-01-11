import React from "react";

export default function Container({ children }) {
  return (
    <div>
      <h1>Belajar React</h1>
      {children}
      <footer>Footer</footer>
    </div>
  );
}
