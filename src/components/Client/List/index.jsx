import {
	Alert,
	Button,
	Modal,
	Paper,
	Snackbar,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TableHead,
	TablePagination,
	TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { style } from "../../../constants";
import { columnsClient } from "../../../constants/table";
import useClient from "../../../hooks/client";
import useModal from "../../../hooks/modal";
import {
	appendClient,
	removeClient,
	updateClient,
} from "../../../redux/clientSlice";
import { addClient, deleteClient, editClient } from "../../../services/client";
import confirm from "../../../utils/confirm-dialog";
import TablePaginationActions from "../../Pagination";
import { ClientAdd, ClientEdit } from "../Form";
import useNotification from "../../../hooks/notification";

const ClientList = () => {
	const { open, handleClose, notification, setError, setSuccess } =
		useNotification();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const [client, setClient] = useState();

	const [admins] = useClient();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onEdit = (row) => {
		setClient(row);
		handleOpenEdit();
	};

	const navigateToClientAbonnement = (client) => {
		navigate(`${client.id}/abonnements`, { state: { client } });
	};

	const handleOk = async (id) => {
		try {
			await deleteClient(id);
			dispatch(removeClient(id));
			setSuccess("Suppression avec succès");
		} catch (errors) {
			setSuccess("Suppression échouée");
			console.error(errors);
		}
	};

	const handleDelete = async (row) => {
		await confirm(`Voulez vous vraiment supprimer le client ${row.nom}?`, {
			okLabel: "Supprimer",
			cancelLabel: "Annuler",
			proceed: () => handleOk(row.id),
		});
	};

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - admins.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleAddSubmit = async (values) => {
		try {
			const response = await addClient({
				nom: values.nom,
				prenom: values.prenom,
				adresse: values.adresse,
				contact: values.contact,
			});
			dispatch(appendClient(response.data));
			handleCloseAdd();
			setSuccess("Ajout client avec succès");
		} catch (errors) {
			setError("Ajout client échoué");
			console.error(errors);
		}
	};

	const handleEditSubmit = async (values) => {
		try {
			const response = await editClient(client.id, values);
			dispatch(updateClient(response.data));
			handleCloseEdit();
			setSuccess("Modification avec succès");
		} catch (errors) {
			setError("Suppression échoué");
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
								{columnsClient.map((column) => (
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
								? admins.slice(
										page * rowsPerPage,
										page * rowsPerPage + rowsPerPage,
								  )
								: admins
							).map((row) => (
								<TableRow key={row.id}>
									<TableCell component='th' scope='row'>
										{row.id}
									</TableCell>
									<TableCell component='th' scope='row'>
										{row.nom}
									</TableCell>
									<TableCell>{row.prenom}</TableCell>
									<TableCell>{row.adresse}</TableCell>
									<TableCell>{row.contact}</TableCell>
									<TableCell>
										<div className='actions'>
											<i
												className='bx bx-link bx-sm cursor-pointer'
												onClick={() =>
													navigateToClientAbonnement(
														row,
													)
												}></i>
											<i
												className='fas fa-edit fa-lg blue-color cursor-pointer'
												onClick={() => onEdit(row)}
											/>

											<i
												className='fas fa-trash-alt fa-lg red-color cursor-pointer'
												onClick={() =>
													handleDelete(row)
												}
											/>
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
									count={admins.length}
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
				aria-labelledby='modal-add-title'
				aria-describedby='modal-add-description'>
				<Box sx={style}>
					<ClientAdd
						handleClose={handleCloseAdd}
						onSubmit={handleAddSubmit}
					/>
				</Box>
			</Modal>
			<Modal
				open={openEdit}
				onClose={handleCloseEdit}
				aria-labelledby='modal-edit-title'
				aria-describedby='modal-edit-description'>
				<Box sx={style}>
					<ClientEdit
						client={client}
						handleClose={handleCloseEdit}
						onSubmit={handleEditSubmit}
					/>
				</Box>
			</Modal>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}>
				<Alert
					onClose={handleClose}
					severity={notification.severity}
					variant='filled'
					sx={{ width: "100%" }}>
					{notification.message}
				</Alert>
			</Snackbar>
		</>
	);
};

export default ClientList;
