import {
	Box,
	Button,
	Modal,
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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { style } from "../../../constants";
import { columnsAbonnement } from "../../../constants/table";
import useAbonnement from "../../../hooks/abonnement";
import useModal from "../../../hooks/modal";
import {
	removeAbonnement,
	updateAbonnement,
} from "../../../redux/abonnementSlice";
import { appendTransaction } from "../../../redux/transactionSlice";
import { deleteAbonnement } from "../../../services/abonnement";
import { addTransaction } from "../../../services/transaction";
import TablePaginationActions from "../../Pagination";
import { AbonnementAdd, AbonnementEdit } from "../Form";
import TransactionForm from "../TransactionForm";
import confirm from "../../../utils/confirm-dialog";

const AbonnementList = () => {
	const [page, setPage] = useState(0);
	const [abonnement, setAbonnement] = useState();
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const [
		openTransactionForm,
		handleOpenTransactionForm,
		handleCloseTransactionForm,
	] = useModal();
	const [abonnements] = useAbonnement();
	const dispatch = useDispatch();
	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0
			? Math.max(0, (1 + page) * rowsPerPage - abonnements.length)
			: 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const onEdit = (row) => {
		setAbonnement(row);
		handleOpenEdit();
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleOk = async (id) => {
		try {
			await deleteAbonnement(id);
			dispatch(removeAbonnement(id));
		} catch (errors) {
			console.error(errors);
		}
	};

	const handleDelete = async (row) => {
		if (
			await confirm(
				`Voulez vous vraiment supprimer l'abonnement de ${row.client.nom} dans la zone ${row.zone.nom}?`,
				{
					okLabel: "Supprimer",
					cancelLabel: "Annuler",
					proceed: () => handleOk(row.id),
				},
			)
		) {
			console.log("OK");
		}
	};

	const openTransaction = async (row) => {
		setAbonnement(row);
		handleOpenTransactionForm();
	};

	const handleAddTransaction = async (values) => {
		try {
			const response = await addTransaction(values);
			dispatch(appendTransaction(response.data));
			dispatch(updateAbonnement(response.data.abonnement));
			handleCloseTransactionForm();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<>
			<div>
				<Button
					variant='contained'
					type='button'
					sx={{ marginBottom: "10px" }}
					onClick={handleOpenAdd}>
					Ajouter
				</Button>

				<TableContainer component={Paper}>
					<Table
						sx={{ minWidth: 500 }}
						aria-label='custom pagination table'>
						<TableHead>
							<TableRow>
								{columnsAbonnement.map((column) => (
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
									<TableCell component='th' scope='row'>
										{row.client.nom}
									</TableCell>
									<TableCell>{row.client.prenom}</TableCell>
									<TableCell>{row.frais} Ar</TableCell>
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
											<i
												className='bx bx-add-to-queue cursor-pointer bx-sm'
												onClick={() =>
													openTransaction(row)
												}
											/>
											<i
												className='fas fa-edit fa-lg blue-color cursor-pointer'
												onClick={() => onEdit(row)}></i>
											<i
												className='fas fa-trash-alt fa-lg red-color cursor-pointer'
												onClick={() =>
													handleDelete(row)
												}></i>
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
			<Modal
				open={openAdd}
				onClose={handleCloseAdd}
				aria-labelledby='modal-edit-title'
				aria-describedby='modal-edit-description'>
				<Box sx={style}>
					<AbonnementAdd handleClose={handleCloseAdd} />
				</Box>
			</Modal>
			<Modal
				open={openEdit}
				onClose={handleCloseEdit}
				aria-labelledby='modal-add-title'
				aria-describedby='modal-add-description'>
				<Box sx={style}>
					<AbonnementEdit
						abonnement={abonnement}
						handleClose={handleCloseEdit}
					/>
				</Box>
			</Modal>

			<Modal
				open={openTransactionForm}
				onClose={handleCloseTransactionForm}
				aria-labelledby='modal-transaction-title'
				aria-describedby='modal-transaction-description'>
				<Box sx={style}>
					<TransactionForm
						abonnement={abonnement}
						onSubmit={handleAddTransaction}
					/>
				</Box>
			</Modal>
		</>
	);
};

export default AbonnementList;
