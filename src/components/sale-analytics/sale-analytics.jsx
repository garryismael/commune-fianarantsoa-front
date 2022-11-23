import {
	faAdd,
	faShoppingBag,
	faShoppingCart,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sale-analytics.css";

const SaleAnalytics = () => {
	return (
		<div className='sales-analytics'>
			<h2>Sales</h2>
			<div className='sales'>
				<div className='sale online'>
					<div className='icon bg-primary'>
						<FontAwesomeIcon icon={faShoppingCart} size='lg' />
					</div>
					<div className='right-info'>
						<div className='info'>
							<p>ONLINE ORDERS</p>
							<p className='text-muted text-sm'>Last Hours</p>
						</div>
						<p className='success'>+39%</p>
						<p>3849</p>
					</div>
				</div>
				<div className='sale online'>
					<div className='icon bg-danger'>
						<FontAwesomeIcon icon={faShoppingBag} size='lg' />
					</div>
					<div className='right-info'>
						<div className='info'>
							<p>OFFLINE ORDERS</p>
							<p className='text-muted text-sm'>Last Hours</p>
						</div>
						<p className='danger'>+17%</p>
						<p>1100</p>
					</div>
				</div>
				<div className='sale online'>
					<div className='icon bg-success'>
						<FontAwesomeIcon icon={faUser} size='lg' />
					</div>
					<div className='right-info'>
						<div className='info'>
							<p>NEW CUSTOMERS</p>
							<p className='text-muted text-sm'>Last Hours</p>
						</div>
						<p className='success'>+25%</p>
						<p>849</p>
					</div>
				</div>
			</div>
			<div className='sale add-product'>
				<div className='icon '>
					<FontAwesomeIcon icon={faAdd} />
					<h3>Add Product</h3>
				</div>
			</div>
		</div>
	);
};

export default SaleAnalytics;
