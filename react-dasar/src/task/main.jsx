import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Task from "./Task";
import Tasks from "./Tasks";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Task /> */}
    <Tasks />
  </StrictMode>
);
