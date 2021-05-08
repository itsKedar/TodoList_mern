import React from "react";
import Todo from "./Todo";

function List({ todos, setTodos, flitertodo }) {
  return (
    <div className='container'>
      {flitertodo.map((todo) => (
        <Todo
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          key={todo._id}
          text={todo.title}
        />
      ))}
    </div>
  );
}

export default List;
