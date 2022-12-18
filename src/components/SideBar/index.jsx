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
					<NavLink to='/' end className={({ isActive }) =>`${isActive && 'active'}`}>
						<i className='bx bxs-dashboard bx-sm'></i>
						<span className='text'>Dashboard</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/admins' className={({ isActive }) =>`${isActive && 'active'}`}>
						<i className='fas fa-user-shield'></i>
						<span className='text'>Utilisateurs</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/clients' className={({ isActive }) =>`${isActive && 'active'}`}>
						<i className='fas fa-user-group fa-sm'></i>
						<span className='text'>Clients</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/abonnements' className={({ isActive }) =>`${isActive && 'active'}`}>
						<i className='fas fa-solid fa-font'></i>
						<span className='text'>Abonnements</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/transactions' className={({ isActive }) =>`${isActive && 'active'}`}>
						<i className='fas fa-solid fa-sack-dollar'></i>
						<span className='text'>Transactions</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/pavillons' className={({ isActive }) =>`${isActive && 'active'}`}>
						<i className='fas fa-user-shield'></i>
						<span className='text'>Pavillons</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/zone' className={({ isActive }) =>`${isActive && 'active'}`}>
						<i className='fas fa-solid fa-location-dot'></i>
						<span className='text'>Zones</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/activites' className={({ isActive }) =>`${isActive && 'active'}`}>
						<i className='fas fa-solid fa-star'></i>
						<span className='text'>Activités</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/categorieActivite' className={({ isActive }) =>`${isActive && 'active'}`}>
						<i className='fas fa-solid fa-filter'></i>
						<span className='text'>Catégorie</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/partitions' className={({ isActive }) =>`${isActive && 'active'}`}>
						<i className='fas a-solid fa-list'></i>
						<span className='text'>Partitions</span>
					</NavLink>
				</li>
			</ul>
			<ul className='side-menu'>
				<li>
					<NavLink to='/settings' className={({ isActive }) =>`${isActive && 'active'}`}>
						<i className='bx bxs-cog'></i>
						<span className='text'>Settings</span>
					</NavLink>
				</li>
				<li>
					<div className='logout'>
						<i className='bx bxs-log-out-circle'></i>
						<span className='text' onClick={se_connecter}>
							Logout
						</span>
					</div>
				</li>
			</ul>
		</section>
	);
}

export default Sidebar;
