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
import { columnsPartition } from "../../../constants/table";
import useModal from "../../../hooks/modal";
import useNotification from "../../../hooks/notification";
import usePartition from "../../../hooks/partition";
import {
	appendPartition,
	removePartition,
	updatePartition,
} from "../../../redux/partitionSlice";
import {
	addPartition,
	deletePartition,
	editPartition,
} from "../../../services/partition";
import confirmWrapper from "../../../utils/confirm-dialog";
import TablePaginationActions from "../../Pagination";
import { PartitionAdd, PartitionEdit } from "../Form";

const PartitionList = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const [partition, setPartition] = useState(null);
	const { open, handleClose, notification, setError, setSuccess } =
		useNotification();
	const [partitions] = usePartition();
	const dispatch = useDispatch();

	const onEdit = (row) => {
		setPartition(row);
		handleOpenEdit();
	};

	const handleOk = async (id) => {
		try {
			await deletePartition(id);
			dispatch(removePartition(id));
			setSuccess("Suppression avec succès");
		} catch (errors) {
			setError("Suppression échouée");
			console.error(errors);
		}
	};

	const handleDelete = async (row) => {
		await confirmWrapper(
			`Voulez vous vraiment supprimer la partition ${row.nom}?`,
			{
				okLabel: "Supprimer",
				cancelLabel: "Annuler",
				proceed: () => handleOk(row.id),
			},
		);
	};

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0
			? Math.max(0, (1 + page) * rowsPerPage - partitions.length)
			: 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const onAddSubmit = async (values) => {
		try {
			const response = await addPartition(values);
			dispatch(appendPartition(response.data));
			handleCloseAdd();
			setSuccess("Ajout avec succès");
		} catch (errors) {
			setError("Ajout échoué");
			console.error(errors);
		}
	};

	const onEditSubmit = async (values) => {
		try {
			const response = await editPartition(partition.id, values);
			dispatch(updatePartition(response.data));
			handleCloseEdit();
			setSuccess("Modification avec succès");
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

				<TableContainer component={Paper}>
					<Table
						sx={{ minWidth: 500 }}
						aria-label='custom pagination table'>
						<TableHead>
							<TableRow>
								{columnsPartition.map((column) => (
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
								? partitions.slice(
										page * rowsPerPage,
										page * rowsPerPage + rowsPerPage,
								  )
								: partitions
							).map((row) => (
								<TableRow key={row.id}>
									<TableCell component='th' scope='row'>
										{row.id}
									</TableCell>

									<TableCell>{row.nom}</TableCell>
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
									count={partitions.length}
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
					<PartitionAdd
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
					<PartitionEdit
						partition={partition}
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

export default PartitionList;
