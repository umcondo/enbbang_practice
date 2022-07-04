import { Route, Routes, Navigate } from "react-router";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
