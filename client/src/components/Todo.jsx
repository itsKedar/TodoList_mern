import React from "react";
import axios from "axios";
const Todo = ({ text, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    axios
      .delete(`/todos/${todo._id}`)
      .then(setTodos(todos.filter((el) => el._id !== todo._id)));
  };

  const completeHandler = () => {
    axios.patch(`/todos/${todo._id}`, { complete: !todo.complete }).then(
      setTodos(
        todos.map((item) => {
          if (item._id === todo._id) {
            return {
              ...item,
              complete: !item.complete,
            };
          }
          return item;
        })
      )
    );
  };

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.complete ? "completed" : ""}`}>
        {text}
        <i
          className='fas fa-check-square complete-btn'
          onClick={completeHandler}></i>
        <i className='fas fa-trash trash-btn' onClick={deleteHandler}></i>
      </li>
    </div>
  );
};

export default Todo;
