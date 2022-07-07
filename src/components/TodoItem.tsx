import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
}> = (props) => {
  const todosCtx = useContext(TodosContext);

  const todoClickHandler = () => {
    todosCtx.removeTodo(props.id);
  };

  return (
    <li className={classes.item} onClick={todoClickHandler}>
      {props.text}
    </li>
  );
};

export default TodoItem;
