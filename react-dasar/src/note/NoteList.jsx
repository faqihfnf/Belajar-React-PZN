import React, { useContext } from "react";
import Note from "./Note";
import { NoteContext } from "./NoteContext";

export default function NoteList() {
  const notes = useContext(NoteContext);

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
