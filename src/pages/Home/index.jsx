import { Link } from "react-router-dom";
import useStats from "../../hooks/stats";
import { useRecentTransaction } from "../../hooks/transaction";
import "./index.css";

function Home() {
	const [stats] = useStats();
	const [transactions] = useRecentTransaction();
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
						<p>Recettes</p>
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
								<th>Client</th>
								<th>Utilisateur</th>
								<th>Numéro pavillon</th>
								<th>Date Transaction</th>
								<th>Est vérifié</th>
							</tr>
						</thead>
						<tbody>
							{transactions.map((transaction) => (
								<tr key={transaction.id}>
									<td>
										{transaction.abonnement.client.nom}{" "}
										{transaction.abonnement.client.prenom}
									</td>
									<td>{transaction.utilisateur.nom}</td>
									<td>
										{transaction.abonnement.pavillon.numero}
									</td>
									<td>{transaction.date}</td>
									<td className={transaction.est_verifie ? "status completed" : "status pending"}>
										{transaction.est_verifie
											? "Vérifié"
											: "En Cours"}
									</td>
								</tr>
							))}
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
