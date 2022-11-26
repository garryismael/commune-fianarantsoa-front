import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";
import Topbar from "../TopBar";
import "./index.css";

const Layout = () => {
	return (
		<>
			<Topbar />
			<div className='container'>
				<Sidebar />
                <Outlet/>
			</div>
		</>
	);
};

export default Layout