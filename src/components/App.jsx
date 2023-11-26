import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setItems] = useState([]);
  function addNote(note) {
    setItems((previtems) => {
      return [...previtems, note];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {item.map((noteItem) => {
        return <Note title={noteItem.title} content={noteItem.content} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
