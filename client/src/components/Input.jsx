import React, { useEffect } from "react";
import axios from "axios";
function Input({ inputText, setText, todos, setTodos, setStatus }) {
  //axios get resquest
  useEffect(() => {
    axios.get("/todos").then((res) => {
      setTodos(res.data);
    });
    //eslint-disable-next-line
  }, []);

  //handler functions
  const inputHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    axios
      .post("/todos", {
        title: inputText,
        completed: false,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get("/todos").then((res) => {
      setTodos(res.data);
    });
    setText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form id='form'>
      <input
        value={inputText}
        onChange={inputHandler}
        type='text'
        id='input'
        autoComplete='off'
        placeholder='Write something'></input>
      <button onClick={submitHandler} type='submit' id='sumbit' value='Add'>
        <i className='fas fa-plus-square add_btn'></i>
      </button>
      <div className='select'>
        <select onChange={statusHandler} className='filter-todo'>
          <option value='all'> ALL</option>
          <option value='completed'> Completed</option>
          <option value='uncompleted'> Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Input;
