import { cards } from "../../constants/card";
import Card from "../card/Card";
import "./Insight.css";

const Insights = () => {
	return (
		<div class='insights'>
			{cards.map((card, index) => (
				<Card
					key={index}
					icon={card.icon}
					total={card.title}
					money={card.value}
					percentage={card.percentage}
					className={card.className}
				/>
			))}
		</div>
	);
};

export default Insights;
