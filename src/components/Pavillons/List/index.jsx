import { Alert, Button, Modal, Snackbar } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { style } from "../../../constants";
import { columnsPavillon } from "../../../constants/table";
import useModal from "../../../hooks/modal";
import useNotification from "../../../hooks/notification";
import usePavillon from "../../../hooks/pavillon";
import {
	appendPavillon,
	removePavillon,
	updatePavillon,
} from "../../../redux/pavillonSlice";
import {
	addPavillon,
	deletePavillon,
	editPavillon,
} from "../../../services/pavillons";
import confirm from "../../../utils/confirm-dialog";
import DataTable, { Actions } from "../../DataTable";
import { PavillonAdd, PavillonEdit } from "../Form";

const PavillonList = () => {
	const { open, handleClose, notification, setError, setSuccess } =
		useNotification();
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const [pavillon, setPavillon] = useState();

	const [pavillons] = usePavillon();
	const dispatch = useDispatch();

	const handleOk = async (id) => {
		try {
			await deletePavillon(id);
			dispatch(removePavillon(id));
			setSuccess("Suppression avec succès");
		} catch (errors) {
			setError("Suppression échouée");
			console.error(errors);
		}
	};

	const handleAddPavillon = async (values) => {
		try {
			const response = await addPavillon(values);
			dispatch(appendPavillon(response.data));
			handleCloseAdd();
			setSuccess("Ajout avec succès");
		} catch (errors) {
			setError("Ajout échoué");
			console.error(errors);
		}
	};

	const handleEditSubmit = async (values) => {
		try {
			const response = await editPavillon(pavillon.id, values);
			dispatch(updatePavillon(response.data));
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
			setPavillon(row);
			handleOpenEdit();
		};

		const onDelete = async () => {
			await confirm(
				`Voulez vous vraiment supprimer le pavillon ${row.numero}?`,
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
					rows={pavillons}
					columns={columnsPavillon(renderCell)}
				/>
			</div>

			<Modal
				open={openAdd}
				onClose={handleCloseAdd}
				aria-labelledby='modal-add-title'
				aria-describedby='modal-add-description'>
				<Box sx={style}>
					<PavillonAdd
						handleClose={handleCloseAdd}
						onSubmit={handleAddPavillon}
					/>
				</Box>
			</Modal>
			<Modal
				open={openEdit}
				onClose={handleCloseEdit}
				aria-labelledby='modal-edit-title'
				aria-describedby='modal-edit-description'>
				<Box sx={style}>
					<PavillonEdit
						pavillon={pavillon}
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

export default PavillonList;
