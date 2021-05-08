import React, { useState, useEffect } from "react";
import "./App.css";
import DateHeader from "./components/DateHeader";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [inputText, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [flitertodo, setFilterTodo] = useState([]);

  useEffect(() => {
    switch (status) {
      case "completed":
        setFilterTodo(todos.filter((todo) => todo.complete === true));
        break;
      case "uncompleted":
        setFilterTodo(todos.filter((todo) => todo.complete === false));
        break;
      default:
        setFilterTodo(todos);
        break;
    }
  }, [todos, status]);

  return (
    <div className='App'>
      <DateHeader />
      <Input
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setText={setText}
        setStatus={setStatus}
      />
      <List todos={todos} setTodos={setTodos} flitertodo={flitertodo} />
    </div>
  );
}

export default App;
