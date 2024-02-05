import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  function reducer(todoData, { type, paylaod }) {
    if (type == "ADD") {
      return [...todoData, paylaod.newTask];
    }

    if (type == "DELETE") {
      return todoData.filter((data) => {
        return data.id !== paylaod.id;
      });
    }

    if (type == "TOGGLE") {
      return todoData.map((data) => {
        if (data.id == paylaod.id) {
          return { ...data, completed: !data.completed };
        } else {
          return { ...data };
        }
      });
    }

    return todoData;
  }
  function addTask(newTask) {
    dispatch({
      type: "ADD",
      paylaod: { newTask: newTask },
    });
  }

  function removeTask(id) {
    dispatch({
      type: "DELETE",
      paylaod: { id: id },
    });
  }

  function toggleTask(id) {
    dispatch({
      type: "TOGGLE",
      paylaod: { id: id },
    });
  }

  const [todoData, dispatch] = useReducer(reducer, []);

  return (
    <TodoContext.Provider
      value={{
        todoData,
        addTask,
        removeTask,
        toggleTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}

export default TodoProvider;
