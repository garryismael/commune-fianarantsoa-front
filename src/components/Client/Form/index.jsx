import {
	Button,
	Card,
	CardContent,
	CardHeader,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useClientForm } from "../../../hooks/useClient";
import useGroupe from "../../../hooks/useGroupe";
import { appendClient, updateClient } from "../../../redux/clientSlice";
import { addClient, editClient } from "../../../services/client";

const ClientForm = (props) => {
	const [groupes] = useGroupe();

	return (
		<div className='admin'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
					<form className='admin-form' onSubmit={props.handleSubmit}>
						<TextField
							id='nom'
							label='Nom'
							name='nom'
							value={props.values?.nom}
							variant='outlined'
							onChange={props.onChange}
						/>
						<TextField
							id='prenom'
							name='prenom'
							label='Prénoms'
							value={props.values?.prenom}
							variant='outlined'
							onChange={props.onChange}
						/>
						<TextField
							id='adresse'
							name='adresse'
							label='Adresse'
							value={props.values?.adresse}
							variant='outlined'
							onChange={props.onChange}
						/>
						<TextField
							id='contact'
							name='contact'
							label='Contact'
							value={props.values?.contact}
							variant='outlined'
							onChange={props.onChange}
						/>
						<FormControl fullWidth>
							<InputLabel id='select-label'>Groupe</InputLabel>
							<Select
								id='groupe-id-select'
								name='groupe_id'
								label='Groupe'
								value={props.values?.groupe_id || ""}
								labelId='groupe-id-select-label'
								onChange={props.onChange}>
								{groupes.map((groupe) => (
									<MenuItem key={groupe.id} value={groupe.id}>
										{groupe.nom}-{groupe.zone.nom}-
										{groupe.type_marche.nom}
									</MenuItem>
								))}
							</Select>
						</FormControl>
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
	const [values, onChange] = useClientForm();
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await addClient(values);
			dispatch(appendClient(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<ClientForm
			title='Ajouter un client'
			values={values}
			button='Ajouter'
			handleSubmit={handleSubmit}
			onChange={onChange}
		/>
	);
};

export const ClientEdit = (props) => {
	const [values, onChange] = useClientForm(props.client);
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
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
			values={values}
			button='Modifier'
			handleSubmit={handleSubmit}
			onChange={onChange}
		/>
	);
};

export default ClientForm;
