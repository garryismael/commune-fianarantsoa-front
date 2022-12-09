import React from "react";
import { Link } from "react-router-dom";
import PeopleImg from "../../assets/img/people.png";

import "./index.css";

function Topbar() {
	return (
		<nav className='navbar-content'>
			<i className='bx bx-menu'></i>
			<Link to='#' className='nav-link'>
				Categories
			</Link>
			<form action='#'>
				<div className='form-input'>
					<input type='search' placeholder='Search...' />
					<button type='submit' className='search-btn'>
						<i className='bx bx-search'></i>
					</button>
				</div>
			</form>
			<input type='checkbox' id='switch-mode' hidden />
			<label for='switch-mode' className='switch-mode'></label>
			<Link to='#' className='notification'>
				<i className='bx bxs-bell'></i>
				<span className='num'>8</span>
			</Link>
			<Link to='#' className='profile'>
				<img src={PeopleImg} alt='' />
			</Link>
		</nav>
	);
}

export default Topbar;
