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
import { style } from "../../../constants";
import { columnsActivite } from "../../../constants/table";
import useActivite from "../../../hooks/activite";
import useModal from "../../../hooks/modal";
import useNotification from "../../../hooks/notification";
import {
	appendActivite,
	removeActivite,
	updateActivite,
} from "../../../redux/activiteSlice";
import {
	addActivite,
	deleteActivite,
	editActivite,
} from "../../../services/activites";
import confirm from "../../../utils/confirm-dialog";
import TablePaginationActions from "../../Pagination";
import { ActiviteAdd, ActiviteEdit } from "../Form";

const ActiviteList = () => {
	const { open, handleClose, notification, setError, setSuccess } =
		useNotification();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const [activite, setActivite] = useState();

	const [activites] = useActivite();
	const dispatch = useDispatch();

	const onEdit = (row) => {
		setActivite(row);
		handleOpenEdit();
	};

	const handleOk = async (id) => {
		try {
			await deleteActivite(id);
			dispatch(removeActivite(id));
			setSuccess("Suppression avec succès");
		} catch (errors) {
			setError("Suppression échouée");
			console.error(errors);
		}
	};

	const handleDelete = async (row) => {
		await confirm(
			`Voulez vous vraiment supprimer la l'activité ${row.nom}?`,
			{
				okLabel: "Supprimer",
				cancelLabel: "Annuler",
				proceed: () => handleOk(row.id),
			},
		);
	};

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - activites.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const onAddSubmit = async (values) => {
		try {
			const response = await addActivite(values);
			dispatch(appendActivite(response.data));
			handleCloseAdd();
			setSuccess("Ajout avec succès")
		} catch (errors) {
			setError("Ajout échoué");
			console.error(errors);
		}
	};

	const onEditSubmit = async (values) => {
		try {
			const response = await editActivite(activite.id, values);
			dispatch(updateActivite(response.data));
			handleCloseEdit();
			setSuccess("Modification avec succès")
		} catch (errors) {
			setError("Modification échouée");
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

				<TableContainer component={Paper} className="table-data">
					<Table
						sx={{ minWidth: 500 }}
						aria-label='custom pagination table'>
						<TableHead>
							<TableRow>
								{columnsActivite.map((column) => (
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
								? activites.slice(
										page * rowsPerPage,
										page * rowsPerPage + rowsPerPage,
								  )
								: activites
							).map((row) => (
								<TableRow key={row.id}>
									<TableCell component='th' scope='row'>
										{row.id}
									</TableCell>
									<TableCell component='th' scope='row'>
										{row.nom}
									</TableCell>
									<TableCell component='th' scope='row'>
										{row.categorie_activite.nom}
									</TableCell>
									<TableCell>
										<div className='actions'>
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
									count={activites.length}
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
					<ActiviteAdd
						handleClose={handleCloseAdd}
						onSubmit={onAddSubmit}
					/>
				</Box>
			</Modal>
			<Modal
				open={openEdit}
				onClose={handleCloseEdit}
				aria-labelledby='modal-edit-title'
				aria-describedby='modal-edit-description'>
				<Box sx={style}>
					<ActiviteEdit
						activite={activite}
						handleClose={handleCloseEdit}
						onSubmit={onEditSubmit}
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

export default ActiviteList;
