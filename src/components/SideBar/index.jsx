import "./index.css";

import { faChartBar, faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faChartGantt,
  faChartLine,
  faHome,
  faMoneyBill,
  faRedoAlt,
  faStoreAlt,
  faTimeline,
  faTornado,
  faVoicemail
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebarWrapper'>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Dashboard</h3>
					<ul className='sidebarList'>
						<Link to='/' className='link'>
							<li className='sidebarListItem active'>
								<FontAwesomeIcon
									icon={faHome}
									className='sidebarIcon'
								/>
								Home
							</li>
						</Link>
						<li className='sidebarListItem'>
							<FontAwesomeIcon
								icon={faChartLine}
								className='sidebarIcon'
							/>
							Analytics
						</li>
						<li className='sidebarListItem'>
							<FontAwesomeIcon
								icon={faChartGantt}
								className='sidebarIcon'
							/>
							Sales
						</li>
					</ul>
				</div>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Quick Menu</h3>
					<ul className='sidebarList'>
						<Link to='/users' className='link'>
							<li className='sidebarListItem'>
								<FontAwesomeIcon icon={faUser} className='sidebarIcon' />
								Users
							</li>
						</Link>
						<Link to='/products' className='link'>
							<li className='sidebarListItem'>
								<FontAwesomeIcon icon={faStoreAlt} className='sidebarIcon' />
								Products
							</li>
						</Link>
						<li className='sidebarListItem'>
							<FontAwesomeIcon icon={faMoneyBill} className='sidebarIcon' />
							Transactions
						</li>
						<li className='sidebarListItem'>
							<FontAwesomeIcon
								icon={faChartBar}
								className='sidebarIcon'
							/>
							Reports
						</li>
					</ul>
				</div>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Notifications</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem'>
							<FontAwesomeIcon icon={faVoicemail} className='sidebarIcon' />
							Mail
						</li>
						<li className='sidebarListItem'>
							<FontAwesomeIcon icon={faRedoAlt} className='sidebarIcon' />
							Feedback
						</li>
						<li className='sidebarListItem'>
							<FontAwesomeIcon icon={faMessage} className='sidebarIcon' />
							Messages
						</li>
					</ul>
				</div>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Staff</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem'>
							<FontAwesomeIcon icon={faTornado} className='sidebarIcon' />
							Manage
						</li>
						<li className='sidebarListItem'>
							<FontAwesomeIcon icon={faTimeline} className='sidebarIcon' />
							Analytics
						</li>
						<li className='sidebarListItem'>
            <FontAwesomeIcon
								icon={faChartBar}
								className='sidebarIcon'
							/>
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
