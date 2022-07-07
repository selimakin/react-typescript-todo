import { useContext } from "react";

import classes from "./Todos.module.css";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} text={item.text} id={item.id} />
      ))}
    </ul>
  );
};

export default Todos;
