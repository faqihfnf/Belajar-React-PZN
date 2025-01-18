import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function Task() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useImmer([]);

  function handleChange(e) {
    // handle ketika ada data yang diubah
    setTask(e.target.value);
  }
  function handleClick(e) {
    // handle ketika button diklik
    e.preventDefault();
    setTasks((draft) => {
      draft.push(task);
    });
    setTask("");
  }
  return (
    <div>
      <h1>Task</h1>
      <form>
        <input type="text" placeholder="input task" value={task} onChange={handleChange} />
      </form>
      <button onClick={handleClick}>Add Task</button>
      <h1>List Task</h1>
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
}
