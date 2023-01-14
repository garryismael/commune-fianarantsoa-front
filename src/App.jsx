import { Route, Routes } from "react-router-dom";
import "./App.css";
import AbonnementList from "./components/Abonnement/List";
import ActiviteList from "./components/Activites/List";
import AdminList from "./components/Admin/List";
import CategorieActiviteList from "./components/Categories/List";
import ClientAbonnement from "./components/Client/Abonnement";
import ClientList from "./components/Client/List";
import Guard from "./components/Guard";
import PartitionList from "./components/Partition/List";
import PavillonList from "./components/Pavillons/List";
import ZoneList from "./components/Zones/List";
import ClientPage from "./pages/Client";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SettingsPage from "./pages/Settings";
import TransactionPage from "./pages/Transaction";
import ChangePassword from "./components/Auth/ChangePassword";
import SendEmail from "./components/Auth/SendEmail";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Guard />}>
				<Route path='/' element={<Home />} />
				<Route path='admins' element={<AdminList />} />
				<Route path='/clients' element={<ClientPage />}>
					<Route index element={<ClientList />} />
					<Route
						path=':id/abonnements'
						element={<ClientAbonnement />}
					/>
				</Route>
				<Route path='/abonnements' element={<AbonnementList />} />
				<Route path='/pavillons' element={<PavillonList />} />
				<Route path='/activites' element={<ActiviteList />} />
				<Route
					path='/categorieActivite'
					element={<CategorieActiviteList />}
				/>
				<Route path='/zone' element={<ZoneList />} />
				<Route path='/partitions' element={<PartitionList />} />
				<Route path='/transactions' element={<TransactionPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Route>
			<Route path='login' element={<LoginPage />} />
			<Route path='changePassword/:token' element={<ChangePassword />} />
			<Route path='sendEmail' element={<SendEmail />} />
			<Route />
		</Routes>
	);
}

export default App;
