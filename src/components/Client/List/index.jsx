import { Alert, Button, Modal, Snackbar } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { style } from "../../../constants";
import { columnsClient } from "../../../constants/table";
import useClient from "../../../hooks/client";
import useModal from "../../../hooks/modal";
import useNotification from "../../../hooks/notification";
import {
	appendClient,
	removeClient,
	updateClient,
} from "../../../redux/clientSlice";
import { addClient, deleteClient, editClient } from "../../../services/client";
import confirm from "../../../utils/confirm-dialog";
import DataTable from "../../DataTable";
import { ClientAdd, ClientEdit } from "../Form";

const Actions = ({ navigateToClientAbonnement, onEdit, onDelete }) => (
	<div className='actions'>
		<i
			className='bx bx-add-to-queue cursor-pointer bx-sm'
			onClick={navigateToClientAbonnement}
		/>
		<i
			className='fas fa-edit fa-lg blue-color cursor-pointer'
			onClick={onEdit}
		/>
		<i
			className='fas fa-trash-alt fa-lg red-color cursor-pointer'
			onClick={onDelete}
		/>
	</div>
);

const ClientList = () => {
	const { open, handleClose, notification, setError, setSuccess } =
		useNotification();
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const [client, setClient] = useState();

	const [admins] = useClient();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleOk = async (id) => {
		try {
			await deleteClient(id);
			dispatch(removeClient(id));
			setSuccess("Suppression avec succès");
		} catch (errors) {
			setSuccess("Suppression échouée");
			console.error(errors);
		}
	};

	const handleAddSubmit = async (values) => {
		try {
			const response = await addClient({
				nom: values.nom,
				prenom: values.prenom,
				adresse: values.adresse,
				contact: values.contact,
			});
			dispatch(appendClient(response.data));
			handleCloseAdd();
			setSuccess("Ajout client avec succès");
		} catch (errors) {
			setError("Ajout client échoué");
			console.error(errors);
		}
	};

	const handleEditSubmit = async (values) => {
		try {
			const response = await editClient(client.id, values);
			dispatch(updateClient(response.data));
			handleCloseEdit();
			setSuccess("Modification avec succès");
		} catch (errors) {
			setError("Suppression échoué");
			console.error(errors);
		}
	};

	const renderCell = (params) => {
		const row = params.row;

		const onEdit = () => {
			setClient(row);
			handleOpenEdit();
		};

		const onDelete = async () => {
			await confirm(
				`Voulez vous vraiment supprimer le client ${row.nom}?`,
				{
					okLabel: "Supprimer",
					cancelLabel: "Annuler",
					proceed: () => handleOk(row.id),
				},
			);
		};

		const navigateToClientAbonnement = () => {
			navigate(`${row.id}/abonnements`, { state: { client: row } });
		};

		return (
			<Actions
				navigateToClientAbonnement={navigateToClientAbonnement}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
		);
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

				<DataTable rows={admins} columns={columnsClient(renderCell)} />
			</div>

			<Modal
				open={openAdd}
				onClose={handleCloseAdd}
				aria-labelledby='modal-add-title'
				aria-describedby='modal-add-description'>
				<Box sx={style}>
					<ClientAdd
						handleClose={handleCloseAdd}
						onSubmit={handleAddSubmit}
					/>
				</Box>
			</Modal>
			<Modal
				open={openEdit}
				onClose={handleCloseEdit}
				aria-labelledby='modal-edit-title'
				aria-describedby='modal-edit-description'>
				<Box sx={style}>
					<ClientEdit
						client={client}
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

export default ClientList;
