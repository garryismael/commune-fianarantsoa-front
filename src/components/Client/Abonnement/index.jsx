import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TableHead,
	TablePagination,
	TableRow
} from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { columnsClientAbonnement } from "../../../constants/table";
import { useClientAbonnement } from "../../../hooks/useClient";
import TablePaginationActions from "../../Pagination";
import "./index.css";

const ClientAbonnement = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const location = useLocation();

	const client = location.state.client;

	const [abonnements] = useClientAbonnement(client.id);

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0
			? Math.max(0, (1 + page) * rowsPerPage - abonnements.length)
			: 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<div id='client-abonnement'>
			<div className='left'>
				<h1>Abonnements</h1>
				<ul className='breadcrumb'>
					<li>
						<Link to='/clients'>Client</Link>
					</li>
					<li>
						<i className='bx bx-chevron-right'></i>
					</li>
					<li>
						<Link to='/clients'>
							{client.nom} {client.prenom}
						</Link>
					</li>
				</ul>
			</div>
			<Button
				variant='contained'
				type='button'
				sx={{ marginBottom: "10px" }}>
				Ajouter
			</Button>

			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 500 }}
					aria-label='custom pagination table'>
					<TableHead>
						<TableRow>
							{columnsClientAbonnement.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{(rowsPerPage > 0
							? abonnements.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage,
							  )
							: abonnements
						).map((row) => (
							<TableRow key={row.id}>
								<TableCell component='th' scope='row'>
									{row.id}
								</TableCell>
								<TableCell>{row.mois_a_payer}</TableCell>
								<TableCell>{row.partition.nom}</TableCell>
								<TableCell>
									{row.activite.categorie_activite.nom}
								</TableCell>
								<TableCell>{row.activite.nom}</TableCell>
								<TableCell>
									{row.type_installation.nom}
								</TableCell>
								<TableCell>{row.zone.nom}</TableCell>
								<TableCell>{row.pavillon.numero}</TableCell>
								<TableCell>
									<div className='actions'>
										<i className='fas fa-edit'></i>
										<i className='fas fa-trash-alt'></i>
									</div>
								</TableCell>
							</TableRow>
						))}

						{emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								rowsPerPageOptions={[
									5,
									10,
									25,
									{ label: "All", value: -1 },
								]}
								colSpan={5}
								count={abonnements.length}
								rowsPerPage={rowsPerPage}
								page={page}
								SelectProps={{
									inputProps: {
										"aria-label": "lignes par page",
									},
									native: true,
								}}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
								ActionsComponent={TablePaginationActions}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
		</div>
	);
};

export default ClientAbonnement;
