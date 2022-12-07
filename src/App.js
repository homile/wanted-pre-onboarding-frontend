import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
      </Routes>
    </div>
  );
}

export default App;
