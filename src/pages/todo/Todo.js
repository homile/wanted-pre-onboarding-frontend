import axios from "axios";
import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [modify, setModify] = useState({
    isModify: false,
    id: null,
    todo: "",
  });

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

  // todo list 삭제
  const deleteTodo = (id) => {
    axios.delete(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  };

  // 수정 버튼 클릭
  const modifyHandler = (id) => {
    setModify({ isModify: false, id });
  };

  // todo list 수정
  const updateTodo = (id, isCompleted) => {
    axios
      .put(
        `https://pre-onboarding-selection-task.shop/todos/${id}`,
        { todo: modify.todo, isCompleted },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setModify({ isModify: false });
      });
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
            return (
              <li key={el.id}>
                <input type="checkbox"></input>
                {modify.isModify || modify.id === el.id ? (
                  <input
                    defaultValue={el.todo}
                    onChange={(e) =>
                      setModify({ ...modify, todo: e.target.value })
                    }
                  ></input>
                ) : (
                  <label>{el.todo}</label>
                )}
                {modify.isModify || modify.id === el.id ? (
                  <>
                    <button onClick={() => setModify({ isModify: false })}>
                      취소
                    </button>
                    <button onClick={() => updateTodo(el.id, el.isCompleted)}>
                      저장
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => modifyHandler(el.id)}>수정</button>
                    <button onClick={() => deleteTodo(el.id)}>삭제</button>
                  </>
                )}
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
