import { Alert, Box, Button, Modal, Snackbar } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { style } from "../../../constants";
import { columnsClientAbonnement } from "../../../constants/table";
import { useClientAbonnement } from "../../../hooks/client";
import useModal from "../../../hooks/modal";
import useNotification from "../../../hooks/notification";
import { removeAbonnement } from "../../../redux/abonnementSlice";
import {
	addAbonnement,
	deleteAbonnement,
	editAbonnement,
} from "../../../services/abonnement";
import confirm from "../../../utils/confirm-dialog";
import {
	AbonnementClientAdd,
	AbonnementClientEdit,
} from "../../Abonnement/ClientForm";
import DataTable, { Actions } from "../../DataTable";
import "./index.css";

const ClientAbonnement = () => {
	const { open, handleClose, notification, setError, setSuccess } =
		useNotification();
	const [abonnement, setAbonnement] = useState();
	const location = useLocation();
	const dispatch = useDispatch();
	const client = location.state.client;
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const { abonnements, fetchData } = useClientAbonnement(client.id);

	const handleOk = async (id) => {
		try {
			await deleteAbonnement(id);
			await fetchData();
			dispatch(removeAbonnement(id));
			setSuccess("Suppression avec succès");
		} catch (errors) {
			setError("Suppression échouée");
			console.error(errors);
		}
	};

	const handleAddSubmit = async (values) => {
		try {
			await addAbonnement(values);
			await fetchData();
			handleCloseAdd();
			setSuccess("Ajout avec succès");
		} catch (errors) {
			setError("Ajout échoué");
			console.error(errors);
		}
	};

	const handleEditSubmit = async (values) => {
		try {
			await editAbonnement(abonnement.id, values);
			await fetchData();
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
			setAbonnement(row);
			handleOpenEdit();
		};

		const onDelete = async () => {
			await confirm(
				`Voulez vous vraiment supprimer l'abonnement de ${client.nom} dans la zone ${row.zone.nom}?`,
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
			<div id='client-abonnement'>
				<div className='left'>
					<h1>Abonnements</h1>
					<ul className='breadcrumb'>
						<li>
							<Link to='/clients'>Client</Link>
						</li>
						<li>
							<i className='bx bx-chevron-right'></i>
						</li>
						<li>
							<Link to='/clients'>
								{client.nom} {client.prenom}
							</Link>
						</li>
					</ul>
				</div>
				<Button
					variant='contained'
					type='button'
					sx={{ marginBottom: "10px" }}
					onClick={handleOpenAdd}>
					Ajouter
				</Button>

				<DataTable
					rows={abonnements}
					columns={columnsClientAbonnement(renderCell)}
				/>
			</div>
			<Modal
				open={openAdd}
				onClose={handleCloseAdd}
				aria-labelledby='modal-edit-title'
				aria-describedby='modal-edit-description'>
				<Box sx={style}>
					<AbonnementClientAdd
						handleClose={handleCloseAdd}
						client={client}
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
					<AbonnementClientEdit
						abonnement={abonnement}
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

export default ClientAbonnement;
