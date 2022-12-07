import axios from "axios";
import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  // todo 생성
  const createTodo = (e) => {
    e.preventDefault();

    axios.post(
      `https://pre-onboarding-selection-task.shop/todos`,
      {
        todo: todoText,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
  };

  // todo list get
  const getTodos = () => {
    axios
      .get(`https://pre-onboarding-selection-task.shop/todos`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setTodoList(res.data));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <div>
        <h2>Todo List</h2>
      </div>
      <div>
        <ul>
          {todoList.map((el) => {
            console.log(el);
            return (
              <li key={el.id}>
                <input type="checkbox"></input>
                <label>{el.todo}</label>
                <button>수정</button>
                <button>삭제</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <form onSubmit={createTodo}>
          <input onChange={(el) => setTodoText(el.target.value)}></input>
          <button>추가</button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
