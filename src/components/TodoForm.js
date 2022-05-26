import React, { useState } from "react";

export const TodoForm = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.sendTodo(enteredTodo);
    setEnteredTodo("");
  };
  const todoChangeHandler = (e) => {
    setEnteredTodo(e.target.value);
    console.log(enteredTodo);
  };
  return (
    <div className="w-1/2 m-auto border border-gray-600 p-2">
      <div className="form ">
        <form onSubmit={submitHandler} className="flex flex-col">
          <label>Enter your todo here</label>
          <input
            type="text"
            className=" border border-gray-200 shadow"
            onChange={todoChangeHandler}
            value={enteredTodo}
          />
          <button type="submit" className="">
            Submit Todo
          </button>
        </form>
      </div>
    </div>
  );
};
