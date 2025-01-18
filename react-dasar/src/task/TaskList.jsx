import React from "react";

export default function TaskList({ tasks = [] }) {
  return (
    <div>
      <h1>List Task</h1>
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
}
