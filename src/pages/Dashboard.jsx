import "../assets/css/dashboard.css";
import Insights from "../components/insights/Insight";
import SaleAnalytics from "../components/sale-analytics/sale-analytics";
import RecentOrders from "../components/table/TableView";
import RecentUpdate from "../components/updates/recent-update";

const DashboardPage = () => {
	return (
		<div className='flex-column gap-2'>
			<main className='w-fill'>
				<h1 className='dark-50 mb-1'>Dashboard</h1>
				<Insights />
				<RecentOrders />
			</main>

			<section className='w-84'>
				<RecentUpdate />
				<SaleAnalytics />
			</section>
		</div>
	);
};

export default DashboardPage;
