import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Todo from "./pages/todo/Todo";

function App() {
  const navigate = useNavigate();

  // 토큰이 있을 경우 todo로 없을 경우 로그인/회원가입으로 이동
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/todo");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </>
  );
}

export default App;
