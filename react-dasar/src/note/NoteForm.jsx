import React, { useContext, useState } from "react";
import { NoteDispatchContext } from "./NoteContext";

export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = useContext(NoteDispatchContext);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick(e) {
    setText("");
    dispatch({ type: "ADD_NOTE", text: text });
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} placeholder="add note" />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
