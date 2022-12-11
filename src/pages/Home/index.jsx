import { Link } from "react-router-dom";
import PeopleImg from "../../assets/img/people.png";
import useStats from "../../hooks/stats";
import "./index.css";

function Home() {
	const [stats] = useStats();
	return (
		<>
			<div className='head-title'>
				<div className='left'>
					<h1>Dashboard</h1>
					<ul className='breadcrumb'>
						<li>
							<Link to='#'>Dashboard</Link>
						</li>
						<li>
							<i className='bx bx-chevron-right'></i>
						</li>
						<li>
							<Link to='active' href='#'>
								Home
							</Link>
						</li>
					</ul>
				</div>
				<Link to='#' className='btn-download'>
					<i className='bx bxs-cloud-download'></i>
					<span className='text'>Download PDF</span>
				</Link>
			</div>

			<ul className='box-info'>
				<li>
					<i className='bx bxs-calendar-check'></i>
					<span className='text'>
						<h3>{stats?.transactions || 0}</h3>
						<p>Nouvelle Transaction</p>
					</span>
				</li>
				<li>
					<i className='bx bxs-group'></i>
					<span className='text'>
						<h3>{stats?.clients || 0}</h3>
						<p>Clients</p>
					</span>
				</li>
				<li>
					<i className='bx bxs-dollar-circle'></i>
					<span className='text'>
						<h3>Ar {stats?.money || 0}</h3>
						<p>Total Transaction</p>
					</span>
				</li>
			</ul>

			<div className='table-data'>
				<div className='order'>
					<div className='head'>
						<h3>Transaction Récente</h3>
						<i className='bx bx-search'></i>
						<i className='bx bx-filter'></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>Utilisateur</th>
								<th>Date Transaction</th>
								<th>Est vérifié</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src={PeopleImg} alt='' />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td>
									<span className='status completed'>
										Completed
									</span>
								</td>
							</tr>
							<tr>
								<td>
									<img src={PeopleImg} alt='' />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td>
									<span className='status pending'>
										Pending
									</span>
								</td>
							</tr>
							<tr>
								<td>
									<img src={PeopleImg} alt='' />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td>
									<span className='status process'>
										Process
									</span>
								</td>
							</tr>
							<tr>
								<td>
									<img src={PeopleImg} alt='' />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td>
									<span className='status pending'>
										Pending
									</span>
								</td>
							</tr>
							<tr>
								<td>
									<img src={PeopleImg} alt='' />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td>
									<span className='status completed'>
										Completed
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='todo'>
					<div className='head'>
						<h3>Todos</h3>
						<i className='bx bx-plus'></i>
						<i className='bx bx-filter'></i>
					</div>
					<ul className='todo-list'>
						<li className='completed'>
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded'></i>
						</li>
						<li className='completed'>
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded'></i>
						</li>
						<li className='not-completed'>
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded'></i>
						</li>
						<li className='completed'>
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded'></i>
						</li>
						<li className='not-completed'>
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded'></i>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Home;
