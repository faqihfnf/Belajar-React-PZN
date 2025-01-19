import React, { useContext, useState } from "react";
import { NoteDispatchContext } from "./NoteContext";

export default function Note({ note }) {
  const [isEditing, setEditing] = useState(false);
  const dispatch = useContext(NoteDispatchContext);

  let component;

  function handleChangeText(e) {
    dispatch({ ...note, type: "CHANGE_NOTE", text: e.target.value });
  }

  if (isEditing) {
    component = (
      <>
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button onClick={() => setEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setEditing(true)}>Edit</button>
      </>
    );
  }

  function handleChangeDone(e) {
    dispatch({ ...note, type: "CHANGE_NOTE", done: e.target.checked });
  }
  function handleDelete() {
    dispatch({ type: "DELETE_NOTE", id: note.id });
  }
  return (
    <label>
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
      {component}
      <button onClick={handleDelete}>Delete</button>
    </label>
  );
}
