import {
	Button,
	Card,
	CardContent,
	CardHeader,
	TextField,
} from "@mui/material";
import { useClientForm } from "../../../hooks/client";

const ClientForm = (props) => {
	const formik = useClientForm({ ...props });

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
	return (
		<ClientForm
			title='Ajouter un client'
			button='Ajouter'
			onSubmit={props.onSubmit}
		/>
	);
};

export const ClientEdit = (props) => {
	return (
		<ClientForm
			title='Modifier un client'
			client={props.client}
			button='Modifier'
			onSubmit={props.onSubmit}
		/>
	);
};

export default ClientForm;
