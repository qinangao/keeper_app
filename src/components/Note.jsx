import React from "react";
import Entry from "./Entry";
import notes from "../notes";

function Note() {
  return (
    <div>
      {notes.map((notesTerm) => (
        <Entry
          key={notesTerm.key}
          title={notesTerm.title}
          content={notesTerm.content}
        />
      ))}
      ;
    </div>
  );
}

export default Note;
