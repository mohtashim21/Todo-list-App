import { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  return (
    <div className="App">
      <h1 className="font-bold sm:text-5xl text-3xl sm:my-8 my-5">Todo-List</h1>
      <Form onAdd={addTask} />
      <div className="">
        <TodoList
          tasks={tasks}
          onComplete={completeTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </div>
    </div>
  );
};

export default App;
