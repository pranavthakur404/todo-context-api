import { useState } from "react";
import { useTodoContext } from "../context/TodoProvider";

function Form() {
  const [task, setTask] = useState("");
  const { addTask } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      const newTask = {
        id: crypto.randomUUID(),
        title: task,
        completed: false,
      };
      addTask(newTask);
    }
  };
  return (
    <form action="#" onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
