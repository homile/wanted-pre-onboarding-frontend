import axios from "axios";

// todo list get
export const getTodos = () => {
  return axios.get(`https://pre-onboarding-selection-task.shop/todos`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

// todo 생성
export const createTodo = (e, todo) => {
  e.preventDefault();

  return axios
    .post(
      `https://pre-onboarding-selection-task.shop/todos`,
      {
        todo: todo,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    .then(() => getTodos());
};

// todo list 삭제
export const deleteTodo = (id) => {
  return axios
    .delete(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(() => getTodos());
};

// todo list 수정
export const updateTodo = (id, isCompleted, todo) => {
  return axios
    .put(
      `https://pre-onboarding-selection-task.shop/todos/${id}`,
      { todo, isCompleted },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    .then(() => getTodos());
};
