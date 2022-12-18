import {
	Button,
	Card,
	CardContent,
	CardHeader,
	TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useClientForm } from "../../../hooks/client";
import { appendClient, updateClient } from "../../../redux/clientSlice";
import { addClient, editClient } from "../../../services/client";

const ClientForm = (props) => {
	const formik = useClientForm({
		client: props.client,
		onSubmit: props.handleSubmit,
	});

	return (
		<div className='admin'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
					<form className='admin-form' onSubmit={formik.handleSubmit}>
						<TextField
							id='nom'
							name='nom'
							label='Nom'
							value={formik.values.nom}
							onChange={formik.handleChange}
							error={
								formik.touched.nom && Boolean(formik.errors.nom)
							}
							variant='outlined'
							helperText={formik.touched.nom && formik.errors.nom}
						/>
						<TextField
							id='prenom'
							name='prenom'
							label='Prenom'
							value={formik.values.prenom}
							onChange={formik.handleChange}
							error={
								formik.touched.prenom &&
								Boolean(formik.errors.prenom)
							}
							variant='outlined'
							helperText={
								formik.touched.prenom && formik.errors.prenom
							}
						/>
						<TextField
							id='adresse'
							name='adresse'
							label='Adresse'
							value={formik.values.adresse}
							onChange={formik.handleChange}
							error={
								formik.touched.adresse &&
								Boolean(formik.errors.adresse)
							}
							variant='outlined'
							helperText={
								formik.touched.adresse && formik.errors.adresse
							}
						/>
						<TextField
							id='contact'
							name='contact'
							label='Contact'
							value={formik.values.contact}
							onChange={formik.handleChange}
							error={
								formik.touched.contact &&
								Boolean(formik.errors.contact)
							}
							variant='outlined'
							helperText={
								formik.touched.contact && formik.errors.contact
							}
						/>

						<Button
							variant='contained'
							className='button-form'
							type='submit'>
							{props.button}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export const ClientAdd = (props) => {
	const dispatch = useDispatch();

	const handleSubmit = async (values) => {
		try {
			const response = await addClient({
				nom: values.nom,
				prenom: values.prenom,
				adresse: values.adresse,
				contact: values.contact,
			});
			dispatch(appendClient(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<ClientForm
			title='Ajouter un client'
			button='Ajouter'
			handleSubmit={handleSubmit}
		/>
	);
};

export const ClientEdit = (props) => {
	const dispatch = useDispatch();

	const handleSubmit = async (values) => {
		try {
			const response = await editClient(props.client.id, values);
			dispatch(updateClient(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<ClientForm
			title='Modifier un client'
			client={props.client}
			button='Modifier'
			handleSubmit={handleSubmit}
		/>
	);
};

export default ClientForm;
