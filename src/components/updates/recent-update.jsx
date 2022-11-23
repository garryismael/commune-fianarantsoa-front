import Jessica from "../../assets/img/jessica.jpg";
import Christian from "../../assets/img/christian.jpg";
import Velizar from "../../assets/img/velizar.jpg";
import './recent-update.css';

const RecentUpdate = () => {
	return (
		<div className='recent-updates'>
			<h2>Recent Updates</h2>
			<div className='updates'>
				<div className='update'>
					<div className='profile-photo'>
						<img src={Jessica} alt='Jessica' />
					</div>
					<div className='message'>
						<p>
							<b>Jessica Anderson</b> received his order of Night
							lion tech GPS drone
						</p>
						<p className='text-muted'>2 minutes ago</p>
					</div>
				</div>

				<div className='update'>
					<div className='profile-photo'>
						<img src={Christian} alt='Christian' />
					</div>
					<div className='message'>
						<p>
							<b>Christian Buehner</b> received his order of Night
							lion tech GPS drone
						</p>
						<small className='text-muted'>2 minutes ago</small>
					</div>
				</div>

				<div className='update'>
					<div className='profile-photo'>
						<img src={Velizar} alt='Velizar' />
					</div>
					<div className='message'>
						<p>
							<b>Erica Chen</b> received his order of Night lion
							tech GPS drone
						</p>
						<small className='text-muted'>2 minutes ago</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecentUpdate;
