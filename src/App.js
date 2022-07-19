import { Route, Routes, Navigate } from "react-router";
import Home from "./pages/Home";
import Join from "./pages/Join";
import KakaoToken from "./pages/KakaoToken";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MenuTest from "./pages/MenuTest";
import NewData from "./pages/NewData";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main2" element={<MenuTest />} />
        <Route path="/create" element={<NewData />} />
        <Route path="/oauth/kakao/callback" element={<KakaoToken />} />
      </Routes>
    </div>
  );
}

export default App;
