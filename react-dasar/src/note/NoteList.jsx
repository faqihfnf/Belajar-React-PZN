import React from "react";
import Note from "./Note";

export default function NoteList({ notes, onChange, onDelete }) {
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} onChange={onChange} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
