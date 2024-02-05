import React from "react";
import { useTodoContext } from "../context/TodoProvider";

function Todo({ id, title, completed }) {
  const { removeTask, toggleTask } = useTodoContext();

  const completeStyle = {
    background: completed ? "green" : "",
  };
  return (
    <div className="todo" style={completeStyle}>
      <p>Id : {id}</p>
      <p>Task : {title}</p>
      <p>Completed : {completed ? "True" : "False"}</p>
      <br />
      <button
        onClick={() => {
          removeTask(id);
        }}
      >
        Remove
      </button>
      <button
        onClick={() => {
          toggleTask(id);
        }}
      >
        Toggle Status
      </button>
    </div>
  );
}

export default Todo;
