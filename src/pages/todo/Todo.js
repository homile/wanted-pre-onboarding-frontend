import React from "react";

const Todo = () => {
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
        <form>
          <input></input>
          <button>추가</button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
