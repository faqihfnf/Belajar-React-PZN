import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateTodo } from "./todoListSlice";
import { getTodo } from "./todoListSlice";

export default function UpdateTodo() {
  const params = useParams();
  const todo = useSelector((state) => getTodo(state, Number(params.id)));
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(updateTodo({ id: todo.id, name: name }));
    navigate("/todolist");
  }

  return (
    <div>
      <h1>Update Todo</h1>
      <input
        type="text"
        value={name}
        placeholder="add todo"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
