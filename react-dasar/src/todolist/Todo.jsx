import React from "react";

export default function Todo({ text, isCompleted, isDeleted }) {
  if (isDeleted) {
    return null;
  } else {
    return (
      <li>
        {" "}
        {isCompleted ? "✅" : "❌"} {text}
      </li>
    );
  }
}
