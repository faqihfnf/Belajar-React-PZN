import React, { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note";
import { NoteContext } from "./NoteContext";

export default function NoteList() {
  const notes = useContext(NoteContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const filteredNotes = useMemo(() => {
    console.log("filteredNotes");
    return notes.filter((note) => note.text.includes(search));
  }, [notes, search]);

  function handleSearch(e) {
    console.log("handleSearch");
    setSearch(searchInput.current.value);
  }

  return (
    <div>
      <input ref={searchInput} type="text" placeholder="search" />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
