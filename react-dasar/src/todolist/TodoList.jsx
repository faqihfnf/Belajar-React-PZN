import React from "react";
import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 1,
      text: "Belajar React",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Belajar HTML",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Belajar CSS",
      isCompleted: true,
    },
    {
      id: 4,
      text: "Belajar JS",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Belajar PHP",
      isCompleted: false,
    },
  ];
  //   const todos = data.map((todo) => <Todo {...todo} />);
  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
