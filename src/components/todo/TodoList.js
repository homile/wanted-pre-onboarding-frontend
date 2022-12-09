import React from "react";
import { deleteTodo, updateTodo } from "../../apis/todoApi";
import {
  List,
  ListButton,
  ListInput,
  ListLabel,
} from "../../pages/todo/styles";

const TodoList = ({
  id,
  isCompleted,
  todo,
  setModify,
  modify,
  checkHandler,
  modifyHandler,
  setTodoList,
}) => {
  const saveHandler = () => {
    updateTodo(id, isCompleted, modify.todo).then((res) =>
      setTodoList(res.data)
    );
    setModify({ isModify: false });
  };

  return (
    <List key={id}>
      <input
        type="checkbox"
        id={id}
        onClick={() => checkHandler(id, isCompleted, todo)}
        checked={isCompleted}
      ></input>
      {modify.isModify || modify.id === id ? (
        <ListInput
          defaultValue={todo}
          onChange={(e) => setModify({ ...modify, todo: e.target.value })}
        ></ListInput>
      ) : (
        <ListLabel htmlFor={id} completed={isCompleted}>
          {todo}
        </ListLabel>
      )}
      {modify.isModify || modify.id === id ? (
        <>
          <ListButton onClick={() => setModify({ isModify: false })}>
            취소
          </ListButton>
          <ListButton onClick={saveHandler}>저장</ListButton>
        </>
      ) : (
        <>
          <ListButton onClick={() => modifyHandler(id)}>수정</ListButton>
          <ListButton
            onClick={() => deleteTodo(id).then((res) => setTodoList(res.data))}
          >
            삭제
          </ListButton>
        </>
      )}
    </List>
  );
};

export default TodoList;
