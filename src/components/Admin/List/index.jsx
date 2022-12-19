import { Button, Modal, TableHead } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { style } from "../../../constants";
import { columnsAdmin } from "../../../constants/table";
import useAdmin from "../../../hooks/admin";
import useModal from "../../../hooks/modal";
import { removeAdmin } from "../../../redux/adminSlice";
import { deleteAdmin } from "../../../services/admin";
import TablePaginationActions from "../../Pagination";

import {
	adminEditValidationSchema,
	adminValidationSchema
} from "../../../validations/admin-form";
import { AdminAdd, AdminEdit } from "../Form";
import "./index.css";

export default function AdminList() {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [user, setUser] = useState();
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();

	const [admins] = useAdmin();
	const dispatch = useDispatch();

	const onEdit = (row) => {
		setUser(row);
		handleOpenEdit();
	};

	const handleDelete = async (id) => {
		if (window.confirm("Voulez vous vraiment supprimer?")) {
			try {
				await deleteAdmin(id);
				dispatch(removeAdmin(id));
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
								{columnsAdmin.map((column) => (
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
									<TableCell>{row.email}</TableCell>
									<TableCell>{row.contact}</TableCell>
									<TableCell>
										<div className='actions'>
											<i
												className='fas fa-edit fa-lg blue-color cursor-pointer'
												onClick={() => onEdit(row)}></i>
											<i
												className='fas fa-trash-alt fa-lg red-color cursor-pointer'
												onClick={() =>
													handleDelete(row.id)
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
				aria-labelledby='modal-edit-title'
				aria-describedby='modal-edit-description'>
				<Box sx={style}>
					<AdminAdd
						validationSchema={adminValidationSchema}
						handleClose={handleCloseAdd}
					/>
				</Box>
			</Modal>
			<Modal
				open={openEdit}
				onClose={handleCloseEdit}
				aria-labelledby='modal-add-title'
				aria-describedby='modal-add-description'>
				<Box sx={style}>
					<AdminEdit
						utilisateur={user}
						validationSchema={adminEditValidationSchema}
						handleClose={handleCloseEdit}
					/>
				</Box>
			</Modal>
		</>
	);
}
