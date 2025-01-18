import React, { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick(e) {
    setText("");
    onAddNote(text);
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} placeholder="add note" />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
