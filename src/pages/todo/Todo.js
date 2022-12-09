import axios from "axios";
import React, { useEffect, useState } from "react";
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

  // todo 생성
  const createTodo = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://pre-onboarding-selection-task.shop/todos`,
        {
          todo: todoText,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => getTodos());
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
    axios
      .delete(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => getTodos());
  };

  // 수정 버튼 클릭
  const modifyHandler = (id) => {
    setModify({ isModify: false, id });
  };

  // todo list 수정
  const updateTodo = (id, isCompleted, todo) => {
    axios
      .put(
        `https://pre-onboarding-selection-task.shop/todos/${id}`,
        { todo: todo === undefined ? modify.todo : todo, isCompleted },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        getTodos();
        setModify({ isModify: false });
      });
  };

  const checkHandler = (id, isCompleted, todo) => {
    updateTodo(id, !isCompleted, todo);
  };

  useEffect(() => {
    getTodos();
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
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </UList>
      </ListContainer>
      <FormContainer>
        <Form onSubmit={createTodo}>
          <Input onChange={(el) => setTodoText(el.target.value)}></Input>
          <SubmitButton>추가</SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Todo;
