import React, { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let notesCopy = [...notes];
    notesCopy.push({ title, desc });
    setNotes(notesCopy);
    setTitle("");
    setDesc("");
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl mb-10">Node App</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-10 items-start"
      >
        <input
          type="text"
          placeholder="Title"
          className="border p-2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          placeholder="Discription"
          cols="30"
          className="border p-2"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <input
          type="submit"
          value="Add"
          className="bg-gray-400 px-8 py-2 rounded-md"
        />
      </form>

      <div>
        {notes.length > 0 ? (
          <div>
            {notes.map((note, index) => (
              <div key={index} className='border p-5 my-5'>
                <h2 className="text-2xl underline">{note.title}</h2>
                <p>{note.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>No Notes</div>
        )}
      </div>
    </div>
  );
};

export default App;