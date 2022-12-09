import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
	TableRow
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { style } from "../../../constants";
import { columnsClient } from "../../../constants/table";
import useClient from "../../../hooks/useClient";
import useModal from "../../../hooks/useModal";
import { removeClient } from "../../../redux/clientSlice";
import { deleteClient } from "../../../services/client";
import TablePaginationActions from "../../Pagination";
import { ClientAdd, ClientEdit } from "../Form";

const ClientList = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const [client, setClient] = useState();

	const [admins] = useClient();
	const dispatch = useDispatch();

	const onEdit = (row) => {
		setClient(row);
		handleOpenEdit();
	};

	const handleDelete = async (id) => {
		if (window.confirm("Voulez vous vraiment supprimer?")) {
			try {
				await deleteClient(id);
				dispatch(removeClient(id));
			} catch (errors) {
				console.error(errors);
			}
		}
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
									<TableCell>{row.groupe.nom}</TableCell>
									<TableCell>{row.groupe.zone.nom}</TableCell>
									<TableCell>
										{row.groupe.type_marche.nom}
									</TableCell>
									<TableCell>
										<div className='actions'>
											<FontAwesomeIcon
												icon={faEdit}
												color='blue'
												size='lg'
												onClick={() => onEdit(row)}
											/>

											<FontAwesomeIcon
												icon={faTrashAlt}
												color='red'
												size='lg'
												onClick={() =>
													handleDelete(row.id)
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
					<ClientAdd handleClose={handleCloseAdd} />
				</Box>
			</Modal>
			<Modal
				open={openEdit}
				onClose={handleCloseEdit}
				aria-labelledby='modal-edit-title'
				aria-describedby='modal-edit-description'>
				<Box sx={style}>
					<ClientEdit client={client} handleClose={handleCloseEdit} />
				</Box>
			</Modal>
		</>
	);
};

export default ClientList;
