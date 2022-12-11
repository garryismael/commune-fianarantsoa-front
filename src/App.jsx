import { Route, Routes } from "react-router-dom";
import "./App.css";
import AbonnementList from "./components/Abonnement/List";
import AdminList from "./components/Admin/List";
import ClientAbonnement from "./components/Client/Abonnement";
import ClientList from "./components/Client/List";
import Guard from "./components/Guard";
import ClientPage from "./pages/Client";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Guard />}>
				<Route index element={<Home />} />
				<Route path='admins' element={<AdminList />} />
				<Route path='/clients' element={<ClientPage />}>
					<Route index element={<ClientList />} />
					<Route path=":id/abonnements" element={<ClientAbonnement/>}/>
				</Route>
				<Route path='/abonnements' element={<AbonnementList />} />
			</Route>
			<Route path='login' element={<LoginPage />} />
		</Routes>
	);
}

export default App;
