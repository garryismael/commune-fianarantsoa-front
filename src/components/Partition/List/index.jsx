import { Alert, Button, Modal, Snackbar } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { style } from "../../../constants";
import { commonColumns } from "../../../constants/table";
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
import DataTable, { Actions } from "../../DataTable";
import { PartitionAdd, PartitionEdit } from "../Form";

const PartitionList = () => {
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const [partition, setPartition] = useState(null);
	const { open, handleClose, notification, setError, setSuccess } =
		useNotification();
	const [partitions] = usePartition();
	const dispatch = useDispatch();

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

	const [pageSize, setPageSize] = useState(5);
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

	const renderCell = (params) => {
		const onEdit = () => {
			const row = params.row;
			setPartition(row);
			handleOpenEdit();
		};
		const onDelete = async () => {
			const row = params.row;
			await confirmWrapper(
				`Voulez vous vraiment supprimer la partition ${row.nom}?`,
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
			<Button
				variant='contained'
				type='button'
				sx={{ marginBottom: "10px" }}
				onClick={handleOpenAdd}>
				Ajouter
			</Button>
			<DataTable
				rows={partitions}
				columns={commonColumns(renderCell)}
				pageSize={pageSize}
				onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
			/>
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
