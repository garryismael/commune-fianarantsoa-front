import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import { menus } from "../../constants/sidebar";
import "./SideBar.css";

const SideBar = () => {
	return (
		<aside >
			<div className='top'>
				<div className='logo'>
					<img src={Logo} alt='Logo' />
					<h2>
						EGA<span className='danger'>TOR</span>
					</h2>
				</div>
				<div className='close' id='close-btn'>
					<i className='fa fa-solid fa-close fa-xl'></i>
				</div>
			</div>
			<nav className='sidebar'>
				{menus.map((menu) => (
					<NavLink key={menu.to} to={menu.to}>
						<FontAwesomeIcon
							icon={menu.icon}
							size='xl'
							width='32px'
						/>
						<span>{menu.label}</span>
					</NavLink>
				))}
			</nav>
		</aside>
	);
};

export default SideBar;
