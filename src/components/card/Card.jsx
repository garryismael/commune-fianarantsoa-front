import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";

const Card = (props) => {
	return (
		<div className='card'>
			<FontAwesomeIcon
				icon={props.icon}
				className={props.className}
				size='1x'
			/>
			<div className='middle'>
				<div className='left'>
					<h3>{props.total}</h3>
					<h1>{props.money}</h1>
				</div>
				<div className='progress'>
					<CircularProgressbar
						value={props.percentage}
						text={`${props.percentage}%`}
						strokeWidth="14"
						styles={{
							transition: 'stroke-dashoffset 0.5s ease 0s',
						}}
					/>
				</div>
			</div>
			<small className='text-muted'> Last 24 Hours </small>
		</div>
	);
};

export default Card;
