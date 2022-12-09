import React, { useEffect, useState } from "react";
import { createTodo, getTodos, updateTodo } from "../../apis/todoApi";
import TodoList from "../../components/todo/TodoList";
import { Container } from "../../components/ui/Container";
import {
  Form,
  FormContainer,
  Input,
  ListContainer,
  SubmitButton,
  Title,
  UList,
} from "./styles";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [modify, setModify] = useState({
    isModify: false,
    id: null,
    todo: "",
  });

  // 수정 버튼 클릭
  const modifyHandler = (id) => {
    setModify({ isModify: false, id });
  };

  // 체크박스 완료여부 전송
  const checkHandler = (id, isCompleted, todo) => {
    updateTodo(id, !isCompleted, todo).then((res) => setTodoList(res.data));
  };

  // Todo 추가
  const sumbitHandler = (e) => {
    createTodo(e, todoText).then((res) => setTodoList(res.data));
    setTodoText("");
  };

  useEffect(() => {
    getTodos().then((res) => setTodoList(res.data));
  }, []);

  return (
    <Container>
      <Title>
        <h1>Todo List</h1>
      </Title>
      <ListContainer>
        <UList>
          {todoList.map((el) => {
            return (
              <TodoList
                id={el.id}
                isCompleted={el.isCompleted}
                todo={el.todo}
                setModify={setModify}
                modify={modify}
                checkHandler={checkHandler}
                modifyHandler={modifyHandler}
                setTodoList={setTodoList}
              />
            );
          })}
        </UList>
      </ListContainer>
      <FormContainer>
        <Form onSubmit={(e) => sumbitHandler(e)}>
          <Input
            value={todoText}
            onChange={(el) => setTodoText(el.target.value)}
          ></Input>
          <SubmitButton>추가</SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Todo;
