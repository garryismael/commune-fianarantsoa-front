import "./Notification.css";

const Notification = (props) => {
	return (
		<div className='update'>
			<div className='profile-photo'>
				<img src={props.img} alt={props.img} />
			</div>
			<div className='message w-full'>
				<p>
					<b>Jessica Anderson</b> received his order of Night lion
					tech GPS drone
				</p>
				<small className='text-muted'>2 minutes ago</small>
			</div>
		</div>
	);
};

export default Notification;
