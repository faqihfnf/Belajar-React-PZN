import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function TaskForm({ onSubmit }) {
  const [task, setTask] = useState("");

  function handleChange(e) {
    // handle ketika ada data yang diubah
    setTask(e.target.value);
  }
  function handleClick(e) {
    // handle ketika button diklik
    e.preventDefault();
    onSubmit(task);
    setTask("");
  }
  return (
    <div>
      <h1>Task</h1>
      <form>
        <input type="text" placeholder="input task" value={task} onChange={handleChange} />
      </form>
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
}
