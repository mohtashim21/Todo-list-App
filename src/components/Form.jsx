import React, { useState } from "react";

const Form = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="sm:text-xl text-lg text-center border-black border-2 bg-blue-100 rounded-lg text-black mr-2"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button
        type="submit"
        className="border-solid border-2 border-black pl-2 pr-2 pt-1 pb-1 bg-slate-300 hover:bg-slate-400 rounded-md sm:text-lg text-md"
      >
        Add Task
      </button>
    </form>
  );
};

export default Form;
