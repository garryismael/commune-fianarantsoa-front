import CategoryIcon from "@mui/icons-material/Category";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentsIcon from '@mui/icons-material/Payments';
import PeopleIcon from "@mui/icons-material/People";
import RepartitionIcon from "@mui/icons-material/Repartition";
import SettingsIcon from '@mui/icons-material/Settings';
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Link, NavLink } from "react-router-dom";
import useLogout from "../../hooks/logout";
import "./index.css";

function Sidebar() {
	const se_connecter = useLogout();

	return (
		<section id='sidebar'>
			<Link href='#' className='brand'>
				<i className='bx bxs-smile'></i>
				<span className='text'>CUF</span>
			</Link>
			<ul className='side-menu top'>
				<li>
					<NavLink
						to='/'
						end
						className={({ isActive }) => `${isActive && "active"}`}>
						<DashboardIcon />
						<span className='text'>Dashboard</span>
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/admins'
						className={({ isActive }) => `${isActive && "active"}`}>
						<SupervisedUserCircleIcon />
						<span className='text'>Utilisateurs</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/clients'
						className={({ isActive }) => `${isActive && "active"}`}>
						<PeopleIcon />
						<span className='text'>Clients</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/abonnements'
						className={({ isActive }) => `${isActive && "active"}`}>
						<CurrencyExchangeIcon />
						<span className='text'>Abonnements</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/transactions'
						className={({ isActive }) => `${isActive && "active"}`}>
						<PaymentsIcon/>
						<span className='text'>Transactions</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/pavillons'
						className={({ isActive }) => `${isActive && "active"}`}>
						<HomeWorkIcon />
						<span className='text'>Pavillons</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/zone'
						className={({ isActive }) => `${isActive && "active"}`}>
						<LocationOnIcon />
						<span className='text'>Zones</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/activites'
						className={({ isActive }) => `${isActive && "active"}`}>
						<LocalActivityIcon />
						<span className='text'>Activités</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/categorieActivite'
						className={({ isActive }) => `${isActive && "active"}`}>
						<CategoryIcon />
						<span className='text'>Catégories</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/partitions'
						className={({ isActive }) => `${isActive && "active"}`}>
						<RepartitionIcon />
						<span className='text'>Repartitions</span>
					</NavLink>
				</li>
			</ul>
			<ul className='side-menu'>
				<li>
					<NavLink
						to='/settings'
						className={({ isActive }) => `${isActive && "active"}`}>
						<SettingsIcon/>
						<span className='text'>Paramètres</span>
					</NavLink>
				</li>
				<li>
					<div className='logout'>
						<ExitToAppIcon/>
						<span className='text' onClick={se_connecter}>
							Se déconnecter
						</span>
					</div>
				</li>
			</ul>
		</section>
	);
}

export default Sidebar;
