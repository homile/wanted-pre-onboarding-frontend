import React from "react";
import { deleteTodo, updateTodo } from "../../apis/todoApi";
import {
  List,
  ListButton,
  ListInput,
  ListLabel,
} from "../../pages/todo/styles";

const TodoList = (props) => {
  const saveHandler = () => {
    updateTodo(props.id, props.isCompleted, props.modify.todo).then((res) =>
      props.setTodoList(res.data)
    );
    props.setModify({ isModify: false });
  };

  return (
    <List key={props.id}>
      <input
        type="checkbox"
        id={props.id}
        onClick={() =>
          props.checkHandler(props.id, props.isCompleted, props.todo)
        }
        checked={props.isCompleted}
      ></input>
      {props.modify.isModify || props.modify.id === props.id ? (
        <ListInput
          defaultValue={props.todo}
          onChange={(e) =>
            props.setModify({ ...props.modify, todo: e.target.value })
          }
        ></ListInput>
      ) : (
        <ListLabel htmlFor={props.id} completed={props.isCompleted}>
          {props.todo}
        </ListLabel>
      )}
      {props.modify.isModify || props.modify.id === props.id ? (
        <>
          <ListButton onClick={() => props.setModify({ isModify: false })}>
            취소
          </ListButton>
          <ListButton onClick={saveHandler}>저장</ListButton>
        </>
      ) : (
        <>
          <ListButton onClick={() => props.modifyHandler(props.id)}>
            수정
          </ListButton>
          <ListButton
            onClick={() =>
              deleteTodo(props.id).then((res) => props.setTodoList(res.data))
            }
          >
            삭제
          </ListButton>
        </>
      )}
    </List>
  );
};

export default TodoList;
