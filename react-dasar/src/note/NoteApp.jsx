import React, { useReducer } from "react";
import NoteForm from "./NoteForm";
import { useImmerReducer } from "use-immer";
import NoteList from "./NoteList";
import { NoteContext, NoteDispatchContext } from "./NoteContext";

let id = 0;
const initialNotes = [
  {
    id: id++,
    text: "Belajar HTML",
    done: false,
  },
  {
    id: id++,
    text: "Belajar CSS",
    done: false,
  },
  {
    id: id++,
    text: "Belajar JS",
    done: false,
  },
  {
    id: id++,
    text: "Belajar PHP",
    done: false,
  },
];

function noteReducer(notes, action) {
  if (action.type === "ADD_NOTE") {
    notes.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } else if (action.type === "CHANGE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes[index].text = action.text;
    notes[index].done = action.done;
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes.splice(index, 1);
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(noteReducer, initialNotes);

  return (
    <div>
      <NoteContext.Provider value={notes}>
        <NoteDispatchContext.Provider value={dispatch}>
          <h1>Note App</h1>
          <NoteForm />
          <NoteList />
        </NoteDispatchContext.Provider>
      </NoteContext.Provider>
    </div>
  );
}
