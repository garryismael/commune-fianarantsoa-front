import { Link } from "react-router-dom";
import "./index.css";

function Sidebar() {
	return (
		<section id='sidebar'>
			<Link href='#' className='brand'>
				<i className='bx bxs-smile'></i>
				<span className='text'>CUF</span>
			</Link>
			<ul className='side-menu top'>
				<li className='active'>
					<Link to='/'>
						<i className='bx bxs-dashboard'></i>
						<span className='text'>Dashboard</span>
					</Link>
				</li>
				<li>
					<Link to='/admins'>
						<i className='bx bxs-shopping-bag-alt'></i>
						<span className='text'>Admin</span>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<i className='bx bxs-doughnut-chart'></i>
						<span className='text'>Analytics</span>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<i className='bx bxs-message-dots'></i>
						<span className='text'>Message</span>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<i className='bx bxs-group'></i>
						<span className='text'>Team</span>
					</Link>
				</li>
			</ul>
			<ul className='side-menu'>
				<li>
					<Link href='#'>
						<i className='bx bxs-cog'></i>
						<span className='text'>Settings</span>
					</Link>
				</li>
				<li>
					<Link href='#' className='logout'>
						<i className='bx bxs-log-out-circle'></i>
						<span className='text'>Logout</span>
					</Link>
				</li>
			</ul>
		</section>
	);
}

export default Sidebar;
