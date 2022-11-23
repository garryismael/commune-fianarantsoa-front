import { Link } from "react-router-dom";
import "./Table.css";

const RecentOrders = () => {
	return (
		<div class='recent-orders'>
			<h2>Recent Orders</h2>
			<table>
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Product Number</th>
						<th>Payment</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Foldable Mini drone</td>
						<td>85631</td>
						<td>Due</td>
						<td class='warning'>Pending</td>
						<td class='primary'>Details</td>
					</tr>
					<tr>
						<td>LARVENDER KF102 Drone</td>
						<td>36378</td>
						<td>Refunded</td>
						<td>Declined</td>
						<td class='primary'>Details</td>
					</tr>
					<tr>
						<td>Ruko F11 Pro Drone</td>
						<td>49347</td>
						<td>Due</td>
						<td class='warning'>Pending</td>
						<td class='primary'>Details</td>
					</tr>
					<tr>
						<td>Drone with camera</td>
						<td>96996</td>
						<td>Paid</td>
						<td>Delivered</td>
						<td class='primary'>Details</td>
					</tr>
					<tr>
						<td>Drone with GPS 4k</td>
						<td>22821</td>
						<td>Paid</td>
						<td>Delivered</td>
						<td class='primary'>Details</td>
					</tr>
					<tr>
						<td>DJI Air 25</td>
						<td>81475</td>
						<td>Due</td>
						<td>Preparing</td>
						<td class='primary'>Details</td>
					</tr>
					<tr>
						<td>Lozenge Drone</td>
						<td>00482</td>
						<td>Paid</td>
						<td>Delivered</td>
						<td class='primary'>Details</td>
					</tr>
				</tbody>
			</table>
			<Link to='/'>Show all</Link>
		</div>
	);
};

export default RecentOrders;
