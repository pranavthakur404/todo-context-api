import { useTodoContext } from "../context/TodoProvider";
import Todo from "./Todo";

function Todos() {
  const { todoData } = useTodoContext();
  return (
    <div className="todos">
      {todoData.map((data) => {
        return <Todo key={data.id} {...data} />;
      })}
    </div>
  );
}

export default Todos;
