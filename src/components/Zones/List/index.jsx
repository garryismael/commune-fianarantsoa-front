import { Alert, Button, Modal, Snackbar } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { style } from "../../../constants";
import { commonColumns } from "../../../constants/table";
import useModal from "../../../hooks/modal";
import useNotification from "../../../hooks/notification";
import useZone from "../../../hooks/zone";
import { appendZone, removeZone, updateZone } from "../../../redux/zoneSlice";
import { addZone, deleteZone, editZone } from "../../../services/zone";
import confirm from "../../../utils/confirm-dialog";
import DataTable, { Actions } from "../../DataTable";
import { ZoneAdd, ZoneEdit } from "../Form";

const ZoneList = () => {
	const { open, handleClose, notification, setError, setSuccess } =
		useNotification();
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const [zone, setZone] = useState();

	const [zones] = useZone();
	const dispatch = useDispatch();

	const handleOk = async (id) => {
		try {
			await deleteZone(id);
			dispatch(removeZone(id));
			setSuccess("Suppression avec succès");
		} catch (errors) {
			setError("Suppression échouée");
			console.error(errors);
		}
	};

	const onAddZone = async (values) => {
		try {
			const response = await addZone(values);
			dispatch(appendZone(response.data));
			handleCloseAdd();
			setSuccess("Ajout avec succès");
		} catch (errors) {
			setError("Ajout échoué");
			console.error(errors);
		}
	};

	const onEditZone = async (values) => {
		try {
			const response = await editZone(zone.id, values);
			dispatch(updateZone(response.data));
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
			setZone(row);
			handleOpenEdit();
		};

		const onDelete = async () => {
			await confirm(
				`Voulez vous vraiment supprimer la zone ${row.nom}?`,
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
				<DataTable rows={zones} columns={commonColumns(renderCell)} />
			</div>

			<Modal
				open={openAdd}
				onClose={handleCloseAdd}
				aria-labelledby='modal-add-title'
				aria-describedby='modal-add-description'>
				<Box sx={style}>
					<ZoneAdd
						handleClose={handleCloseAdd}
						onSubmit={onAddZone}
					/>
				</Box>
			</Modal>
			<Modal
				open={openEdit}
				onClose={handleCloseEdit}
				aria-labelledby='modal-edit-title'
				aria-describedby='modal-edit-description'>
				<Box sx={style}>
					<ZoneEdit
						zone={zone}
						handleClose={handleCloseEdit}
						onSubmit={onEditZone}
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

export default ZoneList;
