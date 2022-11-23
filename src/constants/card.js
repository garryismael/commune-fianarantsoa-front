import {
	faChartColumn,
	faChartGantt,
	faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export const cards = [
	{
		icon: faChartLine,
		title: "Total Sales",
		value: "25,025",
		percentage: "81",
		className: "bg-primary",
	},
	{
		icon: faChartColumn,
		title: "Total Expenses",
		value: "14,16",
		percentage: "62",
		className: "bg-danger",
	},
	{
		icon: faChartGantt,
		title: "Total Income",
		value: "10,864",
		percentage: "44",
		className: "bg-success",
	},
];
