import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminList from "./components/Admin/List";
import ClientList from "./components/Client/List";
import Guard from "./components/Guard";
import ClientPage from "./pages/Client";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import NewUser from "./pages/User/Add";
import User from "./pages/User/Detail";
import UserList from "./pages/User/List";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Guard />}>
				<Route index element={<Home />} />
				<Route path='admins' element={<AdminList />} />
				<Route path='/users' element={<UserList />} />
				<Route path='/clients' element={<ClientPage />}>
					<Route index element={<ClientList />} />
				</Route>
				<Route path='/user/:userId' element={<User />} />
				<Route path='/newUser' element={<NewUser />} />
			</Route>
			<Route path='login' element={<LoginPage />} />
		</Routes>
	);
}

export default App;
