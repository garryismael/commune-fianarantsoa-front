import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminList from "./components/Admin/List";
import Guard from "./components/Guard";
import AdminPage from "./pages/Admin";
import AdminAdd from "./pages/Admin/Add";
import AdminEdit from "./pages/Admin/Edit";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import NewUser from "./pages/User/Add";
import User from "./pages/User/Detail";
import UserList from "./pages/User/List";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Guard />}>
        <Route index element={<Home />} />
        <Route path="admins" element={<AdminPage />}>
          <Route index element={<AdminList />} />
          <Route path="add" element={<AdminAdd />} />
          <Route path="edit/:id" element={<AdminEdit />} />
        </Route>
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
