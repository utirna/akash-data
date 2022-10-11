import { Route, Routes } from "react-router-dom";
import Login from "./controllers/Login";
import UserList from "./controllers/UserList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user-list" element={<UserList />} />
    </Routes>
  );
}

export default App;
