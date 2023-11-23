import React, { useState } from "react";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);
    setNote((preNote) => {
      return {
        ...preNote,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
