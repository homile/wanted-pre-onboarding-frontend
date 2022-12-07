import axios from "axios";
import React, { useState } from "react";

const Todo = () => {
  const [todoText, setTodoText] = useState("");

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

  return (
    <div>
      <div>
        <h2>Todo List</h2>
      </div>
      <div>
        <ul>
          <li>
            <input type="checkbox"></input>
            <button>수정</button>
            <button>삭제</button>
          </li>
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
