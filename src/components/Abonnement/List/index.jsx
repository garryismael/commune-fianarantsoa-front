import { Alert, Box, Button, Modal, Snackbar } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { style } from "../../../constants";
import { columnsAbonnement } from "../../../constants/table";
import useAbonnement from "../../../hooks/abonnement";
import useModal from "../../../hooks/modal";
import useNotification from "../../../hooks/notification";
import {
	appendAbonnement,
	removeAbonnement,
	updateAbonnement,
} from "../../../redux/abonnementSlice";
import { appendTransaction } from "../../../redux/transactionSlice";
import {
	addAbonnement,
	deleteAbonnement,
	editAbonnement,
} from "../../../services/abonnement";
import { addTransaction } from "../../../services/transaction";
import confirm from "../../../utils/confirm-dialog";
import DataTable from "../../DataTable";
import { AbonnementAdd, AbonnementEdit } from "../Form";
import TransactionForm from "../TransactionForm";

const Actions = ({ openTransaction, onEdit, onDelete }) => (
	<div className="actions">
		<i
			className='bx bx-add-to-queue cursor-pointer bx-sm'
			onClick={openTransaction}
		/>
		<i
			className='fas fa-edit fa-lg blue-color cursor-pointer'
			onClick={onEdit}/>
		<i
			className='fas fa-trash-alt fa-lg red-color cursor-pointer'
			onClick={onDelete}
		/>
	</div>
);

const AbonnementList = () => {
	const [abonnement, setAbonnement] = useState();
	const [openAdd, handleOpenAdd, handleCloseAdd] = useModal();
	const [openEdit, handleOpenEdit, handleCloseEdit] = useModal();
	const [
		openTransactionForm,
		handleOpenTransactionForm,
		handleCloseTransactionForm,
	] = useModal();
	const { open, handleClose, notification, setSuccess, setError } =
		useNotification();
	const [abonnements] = useAbonnement();
	const dispatch = useDispatch();

	const handleOk = async (id) => {
		try {
			await deleteAbonnement(id);
			dispatch(removeAbonnement(id));
			setSuccess("Suppression avec succès");
		} catch (errors) {
			setError("Suppression abonnement échouée");
			console.error(errors);
		}
	};

	const handleSubmitTransaction = async (values) => {
		try {
			const response = await addTransaction(values);
			dispatch(appendTransaction(response.data));
			dispatch(updateAbonnement(response.data.abonnement));
			handleCloseTransactionForm();
			setSuccess("Ajout transaction avec succès!");
		} catch (errors) {
			setError("Ajout transaction échoué. Ressayez!");
			console.error(errors);
		}
	};

	const handleAddTransaction = async (values) => {
		await confirm(
			`Voulez vous vraiment ajouter une transaction pour ${abonnement.client.nom}?`,
			{
				okLabel: "Ajouter",
				cancelLabel: "Annuler",
				color: "primary",
				proceed: async () => await handleSubmitTransaction(values),
			},
		);
	};

	const handleEditSubmit = async (values) => {
		try {
			const response = await editAbonnement(abonnement.id, values);
			dispatch(updateAbonnement(response.data));
			handleCloseEdit();
			setSuccess("Modification abonnement avec succès");
		} catch (errors) {
			setError("Modification abonnement échouée");
			console.error(errors);
		}
	};

	const handleAddSubmit = async (values) => {
		try {
			const response = await addAbonnement(values);
			dispatch(appendAbonnement(response.data));
			handleCloseAdd();
			setSuccess("Ajout abonnement avec succès");
		} catch (errors) {
			setError("Ajout abonnement échoué");
			console.error(errors);
		}
	};

	const renderCell = (params) => {
		const row = params.row;

		const openTransaction = async () => {
			setAbonnement(row);
			handleOpenTransactionForm();
		};

		const onEdit = () => {
			setAbonnement(row);
			handleOpenEdit();
		};

		const onDelete = async () => {
			await confirm(
				`Voulez vous vraiment supprimer l'abonnement de ${row.client.nom} dans la zone ${row.zone.nom}?`,
				{
					okLabel: "Supprimer",
					cancelLabel: "Annuler",
					proceed: () => handleOk(row.id),
				},
			);
		};

		return (
			<Actions
				openTransaction={openTransaction}
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

				<DataTable
					rows={abonnements}
					columns={columnsAbonnement(renderCell)}
				/>
			</div>
			<Modal
				open={openAdd}
				onClose={handleCloseAdd}
				aria-labelledby='modal-edit-title'
				aria-describedby='modal-edit-description'>
				<Box sx={style}>
					<AbonnementAdd
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
					<AbonnementEdit
						abonnement={abonnement}
						handleClose={handleCloseEdit}
						onSubmit={handleEditSubmit}
					/>
				</Box>
			</Modal>

			<Modal
				open={openTransactionForm}
				onClose={handleCloseTransactionForm}
				aria-labelledby='modal-transaction-title'
				aria-describedby='modal-transaction-description'>
				<Box sx={style}>
					<TransactionForm
						abonnement={abonnement}
						onSubmit={handleAddTransaction}
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

export default AbonnementList;
