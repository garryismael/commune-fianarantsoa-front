import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import User from '../../assets/img/julian.jpg';
import './user-info.css';


const UserInfo = () => {
	return (
		<div className='user'>
			<button type='button' id='menu-btn'>
				<FontAwesomeIcon icon={faBars} size='2xl' />
			</button>
			<div className='theme-toggle'>
				<FontAwesomeIcon icon={faSun} className='font active' size="xl"/>
				<FontAwesomeIcon icon={faMoon} size="xl" className="font"/>
			</div>
			<div className='profile'>
				<div className='info'>
					<p>
						Hey, <b>Garry</b>
					</p>
					<p className='text-muted small'>Admin</p>
				</div>
				<div className='profile-photo'>
					<img src={User} alt='Julian' />
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
