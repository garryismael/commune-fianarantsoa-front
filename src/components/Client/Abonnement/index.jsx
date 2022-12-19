import {
	Alert,
	Box,
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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { style } from "../../../constants";
import { columnsClientAbonnement } from "../../../constants/table";
import { useClientAbonnement } from "../../../hooks/client";
import useModal from "../../../hooks/modal";
import useNotification from "../../../hooks/notification";
import { removeAbonnement } from "../../../redux/abonnementSlice";
import {
	addAbonnement,
	deleteAbonnement,
	editAbonnement,
} from "../../../services/abonnement";
import confirm from "../../../utils/confirm-dialog";
import {
	AbonnementClientAdd,
	AbonnementClientEdit,
} from "../../Abonnement/ClientForm";
import TablePaginationActions from "../../Pagination";
import "./index.css";

const ClientAbonnement = () => {
	const { open, handleClose, notification, setError, setSuccess } =
		useNotification();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [abonnement, setAbonnement] = useState();
	const location = useLocation();
	const dispatch = useDispatch();
	const client = location.state.client;
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const {abonnements, fetchData } = useClientAbonnement(client.id);

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

	const onEdit = (row) => {
		setAbonnement(row);
		handleOpenEdit();
	};

	const handleOk = async (id) => {
		try {
			await deleteAbonnement(id);
			await fetchData();
			dispatch(removeAbonnement(id));
			setSuccess("Suppression avec succès");
		} catch (errors) {
			setError("Suppression échouée");
			console.error(errors);
		}
	};

	const handleDelete = async (row) => {
		await confirm(
			`Voulez vous vraiment supprimer l'abonnement de ${client.nom} dans la zone ${row.zone.nom}?`,
			{
				okLabel: "Supprimer",
				cancelLabel: "Annuler",
				proceed: () => handleOk(row.id),
			},
		);
	};

	const handleAddSubmit = async (values) => {
		try {
			await addAbonnement(values);
			await fetchData();
			handleCloseAdd();
			setSuccess("Ajout avec succès");
		} catch (errors) {
			setError("Ajout échoué");
			console.error(errors);
		}
	};

	const handleEditSubmit = async (values) => {
		try {
			await editAbonnement(abonnement.id, values);
			await fetchData();
			handleCloseEdit();
			setSuccess("Modification avec succès");
		} catch (errors) {
			setError("Modification échouée");
			console.error(errors);
		}
	};

	return (
		<>
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
									<TableCell>{row.frais} Ar</TableCell>
									<TableCell>{row.mois_a_payer}</TableCell>
									<TableCell>{row.frais * row.mois_a_payer} Ar</TableCell>
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
					<AbonnementClientAdd
						handleClose={handleCloseAdd}
						client={client}
						onSubmit={handleAddSubmit}
					/>
				</Box>
			</Modal>
			<Modal
				open={openEdit}
				onClose={handleCloseEdit}
				aria-labelledby='modal-add-title'
				aria-describedby='modal-add-description'>
				<Box sx={style}>
					<AbonnementClientEdit
						abonnement={abonnement}
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

export default ClientAbonnement;
