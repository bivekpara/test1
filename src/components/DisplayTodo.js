import React from "react";
import { TodoItem } from "./TodoItem";

export const DisplayTodo = (props) => {
  const delHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <div>
      Todo List
      <div>
        {props.todos.map((item, i) => (
          <TodoItem todo={item} key={i} onDelete={delHandler} />
        ))}
      </div>
    </div>
  );
};
