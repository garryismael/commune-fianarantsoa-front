import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PeopleImg from "../../assets/img/people.png";

import "./index.css";

function Topbar() {
	const switchRef = useRef(null);

	const onClick = () => {
		const sidebar = window.document.getElementById("sidebar");
		sidebar.classList.toggle("hide");
	};

	useEffect(() => {
		if (switchRef && switchRef.current) {
			switchRef.current.addEventListener("change", function () {
				if (this.checked) {
					document.body.classList.add("dark");
				} else {
					document.body.classList.remove("dark");
				}
			});
		}
	}, []);

	return (
		<nav className='navbar-content'>
			<div className='content-left'>
				<i className='bx bx-menu' onClick={onClick}></i>
				<input
					type='checkbox'
					id='switch-mode'
					ref={switchRef}
					hidden
				/>
			</div>
			<div className='content-right'>
				<label htmlFor='switch-mode' className='switch-mode'></label>
				<Link to='#' className='profile'>
					<img src={PeopleImg} alt='' />
				</Link>
			</div>
		</nav>
	);
}

export default Topbar;
