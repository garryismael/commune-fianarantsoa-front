import { Alert, Button, Modal, Snackbar } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { style } from "../../../constants";
import { columnsAdmin } from "../../../constants/table";
import useAdmin from "../../../hooks/admin";
import useModal from "../../../hooks/modal";
import {
	appendAdmin,
	removeAdmin,
	updateAdmin,
} from "../../../redux/adminSlice";
import { addAdmin, deleteAdmin, editAdmin } from "../../../services/admin";

import useNotification from "../../../hooks/notification";
import confirm from "../../../utils/confirm-dialog";
import {
	adminEditValidationSchema,
	adminValidationSchema,
} from "../../../validations/admin-form";
import DataTable, { Actions } from "../../DataTable";
import { AdminAdd, AdminEdit } from "../Form";
import "./index.css";

export default function AdminList() {
	const { open, handleClose, notification, setError, setSuccess } =
		useNotification();
	const [user, setUser] = useState();
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();

	const [admins] = useAdmin();
	const dispatch = useDispatch();

	const handleOk = async (id) => {
		try {
			await deleteAdmin(id);
			dispatch(removeAdmin(id));
			setSuccess("Suppression avec succès");
		} catch {
			setError("Suppression non réussi");
		}
	};

	const handleAddSubmit = async (values) => {
		try {
			const response = await addAdmin(values);
			dispatch(appendAdmin(response.data));
			handleCloseAdd();
			setSuccess("Ajout avec succès");
		} catch (errors) {
			setError("Ajout non réussi");
			console.error(errors);
		}
	};

	const handleEditSubmit = async (values) => {
		try {
			const response = await editAdmin(user.id, values);
			dispatch(updateAdmin(response.data));
			handleCloseEdit();
			setSuccess("Modification avec succès");
		} catch (errors) {
			setError("Modification non réussi");
			console.error(errors);
		}
	};

	const renderCell = (params) => {
		const row = params.row;

		const onEdit = () => {
			setUser(row);
			handleOpenEdit();
		};

		const onDelete = async () => {
			await confirm(
				`Voulez vous vraiment supprimer l'utilisateur ${row.nom}?`,
				{
					okLabel: "Supprimer",
					cancelLabel: "Annuler",
					proceed: () => handleOk(row.id),
				},
			);
		};
		return <Actions onEdit={onEdit} onDelete={onDelete} />;
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
				<DataTable rows={admins} columns={columnsAdmin(renderCell)} />
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
					<AdminEdit
						utilisateur={user}
						validationSchema={adminEditValidationSchema}
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
}
