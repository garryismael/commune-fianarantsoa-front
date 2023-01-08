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
	TableRow,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { columnsTransaction } from "../../../constants/table";
import useTransaction from "../../../hooks/transaction";
import { setTransactions } from "../../../redux/transactionSlice";
import { bulkUpdateTransaction } from "../../../services/transaction";
import TablePaginationActions from "../../Pagination";
import "./index.css";

const TransactionList = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [transactions] = useTransaction();
	const [ids, setIds] = useState([]);

	const dispatch = useDispatch();

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0
			? Math.max(0, (1 + page) * rowsPerPage - transactions.length)
			: 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleCheck = (e) => {
		if (e.target.checked) {
			setIds((values) => values.concat(e.target.value));
		} else {
			setIds((values) =>
				values.filter((value) => value !== e.target.value),
			);
		}
	};

	const handleValidate = async () => {
		const response = await bulkUpdateTransaction({ ids });
		dispatch(setTransactions(response.data));
	};

	return (
		<>
			<div>
				<div className='transaction-btn'>
					<Button
						variant='contained'
						type='button'
						sx={{ marginBottom: "10px" }}
						onClick={handleValidate}>
						Valider
					</Button>
				</div>

				<TableContainer component={Paper}>
					<Table
						sx={{ minWidth: 500 }}
						aria-label='custom pagination table'>
						<TableHead>
							<TableRow>
								<TableCell key={-1}></TableCell>
								{columnsTransaction.map((column) => (
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
								? transactions.slice(
										page * rowsPerPage,
										page * rowsPerPage + rowsPerPage,
								  )
								: transactions
							).map((row) => (
								<TableRow key={row.id}>
									<TableCell>
										<Checkbox
											value={row.id}
											onChange={handleCheck}
										/>
									</TableCell>
									<TableCell component='th' scope='row'>
										{row.id}
									</TableCell>
									<TableCell component='th' scope='row'>
										{row.abonnement.client.nom}{" "}
										{row.abonnement.client.prenom}
									</TableCell>
									<TableCell>
										{row.abonnement.pavillon.numero}
									</TableCell>
									<TableCell>{row.utilisateur.nom}</TableCell>
									<TableCell>{row.date}</TableCell>
									<TableCell>
										{row.est_verifie
											? "Vérifié"
											: "En Cours"}
									</TableCell>
									<TableCell>{row.total_frais} Ar</TableCell>
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
									count={transactions.length}
									rowsPerPage={rowsPerPage}
									page={page}
									SelectProps={{
										inputProps: {
											"aria-label": "lignes par page",
										},
										native: true,
									}}
									onPageChange={handleChangePage}
									onRowsPerPageChange={
										handleChangeRowsPerPage
									}
									ActionsComponent={TablePaginationActions}
								/>
							</TableRow>
						</TableFooter>
					</Table>
				</TableContainer>
			</div>
		</>
	);
};

export default TransactionList;
