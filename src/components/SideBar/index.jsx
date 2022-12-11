import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import useLogout from "../../hooks/logout";
import "./index.css";

function Sidebar() {
	const se_connecter = useLogout();

	const ulRef = useRef();

	useEffect(() => {
		ulRef.current.childNodes.forEach((item) => {
			item.addEventListener("click", function () {
				ulRef.current.childNodes.forEach((i) => {
					i.classList.remove("active");
				});
				item.classList.add("active");
			});
		});
	});

	return (
		<section id='sidebar'>
			<Link href='#' className='brand'>
				<i className='bx bxs-smile'></i>
				<span className='text'>CUF</span>
			</Link>
			<ul className='side-menu top' ref={ulRef}>
				<li className='active'>
					<NavLink to='/'>
						<i className='bx bxs-dashboard bx-sm'></i>
						<span className='text'>Dashboard</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/clients'>
						<i class='fas fa-user-group fa-sm'></i>
						<span className='text'>Clients</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/abonnements'>
						<i className='fas fa-user-shield'></i>
						<span className='text'>Abonnements</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/admins'>
						<i className='fas fa-user-shield'></i>
						<span className='text'>Utilisateurs</span>
					</NavLink>
				</li>
				<li>
					<NavLink href='#'>
					<i class="fas fa-hand-holding-dollar"></i>
						<span className='text'>Transactions</span>
					</NavLink>
				</li>
			</ul>
			<ul className='side-menu'>
				<li>
					<NavLink href='#'>
						<i className='bx bxs-cog'></i>
						<span className='text'>Settings</span>
					</NavLink>
				</li>
				<li>
					<NavLink href='#' className='logout'>
						<i className='bx bxs-log-out-circle'></i>
						<span className='text' onClick={se_connecter}>
							Logout
						</span>
					</NavLink>
				</li>
			</ul>
		</section>
	);
}

export default Sidebar;
