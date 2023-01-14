import { Alert, Button, Modal, Snackbar } from "@mui/material";
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
import DataTable, { Actions } from "../../DataTable";
import { ActiviteAdd, ActiviteEdit } from "../Form";

const ActiviteList = () => {
	const { open, handleClose, notification, setError, setSuccess } =
		useNotification();
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const [activite, setActivite] = useState();

	const [activites] = useActivite();
	const dispatch = useDispatch();

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

	const onAddSubmit = async (values) => {
		try {
			const response = await addActivite(values);
			dispatch(appendActivite(response.data));
			handleCloseAdd();
			setSuccess("Ajout avec succès");
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
			setSuccess("Modification avec succès");
		} catch (errors) {
			setError("Modification échouée");
			console.error(errors);
		}
	};

	const renderCell = (params) => {
		const row = params.row;

		const onEdit = () => {
			setActivite(row);
			handleOpenEdit();
		};

		const onDelete = async () => {
			await confirm(
				`Voulez vous vraiment supprimer la l'activité ${row.nom}?`,
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
				<DataTable
					rows={activites}
					columns={columnsActivite(renderCell)}
				/>
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
