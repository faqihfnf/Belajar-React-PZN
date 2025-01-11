import React from "react";
import Todo from "./Todo";

export default function TodoList() {
  return (
    <ul>
      <Todo text="Belajar React" isCompleted={false} />
      <Todo text="Belajar HTML" isCompleted={false} isDeleted={true} />
      <Todo text="Belajar CSS" isCompleted={true} />
      <Todo text="Belajar JS" isCompleted={true} />
    </ul>
  );
}
