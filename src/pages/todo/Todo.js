import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "../../components/ui/Container";
import {
  Form,
  FormContainer,
  Input,
  List,
  ListButton,
  ListContainer,
  ListInput,
  ListLabel,
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
              <List key={el.id}>
                <input
                  type="checkbox"
                  onClick={() => checkHandler(el.id, el.isCompleted, el.todo)}
                  checked={el.isCompleted}
                ></input>
                {modify.isModify || modify.id === el.id ? (
                  <ListInput
                    defaultValue={el.todo}
                    onChange={(e) =>
                      setModify({ ...modify, todo: e.target.value })
                    }
                  ></ListInput>
                ) : (
                  <ListLabel>{el.todo}</ListLabel>
                )}
                {modify.isModify || modify.id === el.id ? (
                  <>
                    <ListButton onClick={() => setModify({ isModify: false })}>
                      취소
                    </ListButton>
                    <ListButton
                      onClick={() => updateTodo(el.id, el.isCompleted)}
                    >
                      저장
                    </ListButton>
                  </>
                ) : (
                  <>
                    <ListButton onClick={() => modifyHandler(el.id)}>
                      수정
                    </ListButton>
                    <ListButton onClick={() => deleteTodo(el.id)}>
                      삭제
                    </ListButton>
                  </>
                )}
              </List>
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
