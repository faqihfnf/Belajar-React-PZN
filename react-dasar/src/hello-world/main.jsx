import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./Container.jsx";
import TodoList from "../todolist/TodoList.jsx";
import Table from "../table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import SayHelloForm from "../form/SayHelloForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />
      <AlertButton text={"Alert Button"} message={"You click alert button"} />
      <MyButton text={"My Button"} onSmash={() => alert("You smash my button")} />

      <SayHelloForm />
    </Container>
  </StrictMode>
);
