import { Alert, Button, Modal, Snackbar } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { style } from "../../../constants";
import useZone from "../../../hooks/categorieActivite";
import useModal from "../../../hooks/modal";
import useNotification from "../../../hooks/notification";
import {
	appendCategorieActivite,
	removeCategorieActivite,
	updateCategorieActivite,
} from "../../../redux/categorieActiviteSlice";
import {
	addCategorieActivite,
	deleteCategorieActivite,
	editCategorieActivite,
} from "../../../services/categorieActivite";
import confirm from "../../../utils/confirm-dialog";
import DataTable, { Actions } from "../../DataTable";
import { CategorieActiviteAdd, CategorieActiviteEdit } from "../Form";
import { commonColumns } from "../../../constants/table";

const CategorieActiviteList = () => {
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const [categorieActivite, setCategorieActivite] = useState();

	const [categorieActivites] = useZone();
	const dispatch = useDispatch();
	const { open, handleClose, notification, setError, setSuccess } =
		useNotification();

	const handleOk = async (id) => {
		try {
			await deleteCategorieActivite(id);
			dispatch(removeCategorieActivite(id));
			setSuccess("Suppression avec succès");
		} catch (errors) {
			setError("Suppression échouée");
			console.error(errors);
		}
	};

	const onAddSubmit = async (values) => {
		try {
			const response = await addCategorieActivite(values);
			dispatch(appendCategorieActivite(response.data));
			handleCloseAdd();
			setSuccess("Ajout avec succès");
		} catch (errors) {
			setError("Ajout échoué");
			console.error(errors);
		}
	};

	const onEditSubmit = async (values) => {
		try {
			const response = await editCategorieActivite(
				categorieActivite.id,
				values,
			);
			dispatch(updateCategorieActivite(response.data));
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
			setCategorieActivite(row);
			handleOpenEdit();
		};
		const onDelete = async (row) => {
			await confirm(
				`Voulez vous vraiment supprimer la catégorie d'activité ${row.nom}?`,
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
					rows={categorieActivites}
					columns={commonColumns(renderCell)}
				/>
			</div>

			<Modal
				open={openAdd}
				onClose={handleCloseAdd}
				aria-labelledby='modal-add-title'
				aria-describedby='modal-add-description'>
				<Box sx={style}>
					<CategorieActiviteAdd
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
					<CategorieActiviteEdit
						categorie_activite={categorieActivite}
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

export default CategorieActiviteList;
