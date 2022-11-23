import { Outlet } from "react-router-dom";
import UserInfo from "../components/auth/user-info";
import SideBar from "../components/sidebar/SideBar";

const Layout = () => {
	return (
		<div className='layout'>
			<SideBar />
			<div className='mt-2 main'>
				<UserInfo />
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
