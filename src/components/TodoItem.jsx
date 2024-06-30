import React, { useState } from "react";

const TodoItem = ({ task, onComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      onEdit(task.id, newText);
    }
  };

  return (
    <div className="flex justify-center items-center sm:gap-12 gap-5 my-5 sm:text-2xl text-xl">
      {isEditing ? (
        <input
          className="sm:text-xl text-lg text-center border-black border-2 bg-blue-100 rounded-lg text-black w-24"
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.completed ? "line-through" : "" }}>
          {task.text}
        </span>
      )}
      <button
        className="bg-gray-600 hover:bg-gray-500 text-slate-50 pl-2 pr-2 pt-1 pb-1 rounded-md"
        onClick={() => onComplete(task.id)}
      >
        {task.completed ? "undo" : "completed"}
      </button>
      <button
        className="bg-gray-600 hover:bg-gray-500 text-slate-50 flex justify-center pl-2 pr-2 pt-1 pb-1 rounded-md"
        onClick={handleEdit}
      >
        {isEditing ? "save" : "edit"}
      </button>
      <button
        className="bg-gray-600 hover:bg-gray-500 text-slate-50 pl-2 pr-2 pt-1 pb-1 rounded-md"
        onClick={() => onDelete(task.id)}
      >
        delete
      </button>
    </div>
  );
};

export default TodoItem;
