import { Route, Routes } from "react-router-dom";
import AbonnementPage from "./pages/Abonnement";
import AdminPage from "./pages/Admin";
import ClientPage from "./pages/Client";
import ConfigPage from "./pages/Config";
import ControlleurPage from "./pages/Controlleur";
import DashboardPage from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import "./App.css";
import NotFound from "./pages/NotFound";

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<DashboardPage />} />
				<Route path='admins' element={<AdminPage />} />
				<Route path='controlleurs' element={<ControlleurPage />} />
				<Route path='clients' element={<ClientPage />} />
				<Route path='abonnements' element={<AbonnementPage />} />
				<Route path='configuration' element={<ConfigPage />} />
			</Route>
			<Route path='login' element={<Login />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}
