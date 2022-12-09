import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";
import Topbar from "../TopBar";
import "./index.css";

const Layout = () => {
	return (
		<>
			<Sidebar />
			<div id='content'>
				<Topbar />
				<main>
					<Outlet />
				</main>
			</div>
		</>
	);
};

export default Layout;
