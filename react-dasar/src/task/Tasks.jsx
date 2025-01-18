import React from "react";
import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Tasks() {
  const [tasks, setTasks] = useImmer([]);

  function handleOnSubmit(task) {
    setTasks((draft) => {
      draft.push(task);
    });
  }

  return (
    <div>
      <TaskForm onSubmit={handleOnSubmit} />
      <TaskList tasks={tasks} />
    </div>
  );
}
