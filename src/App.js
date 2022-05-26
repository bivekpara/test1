import { useState } from "react";
import { DisplayTodo } from "./components/DisplayTodo";
import { StoreData } from "./components/StoreData";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [todo, setTodo] = useState([{ title: "test todo", id: "1" }]);

  const getTodo = (todo) => {
    setTodo((prevTodo) => [{ title: todo, id: Math.random() }, ...prevTodo]);
  };

  const delHandler = (rid) => {
    let updatedTodos = todo.filter((item) => item.id !== rid);
    setTodo(updatedTodos);
  };

  return (
    <div className="App">
      <h1>A simple Todo App</h1>
      <TodoForm sendTodo={getTodo} />
      <DisplayTodo todos={todo} onDelete={delHandler} />
      <StoreData />
    </div>
  );
}

export default App;
