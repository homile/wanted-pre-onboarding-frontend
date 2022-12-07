import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Todo from "./pages/todo/Todo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
