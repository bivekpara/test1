import React from "react";

export const TodoItem = (props) => {
  const deleteHandler = (id) => {
    props.onDelete(props.todo.id);
  };
  return (
    <div onClick={deleteHandler} className="bg-slate-300 m-1">
      Todo title is {props.todo.title} and id is {props.todo.id}
    </div>
  );
};
