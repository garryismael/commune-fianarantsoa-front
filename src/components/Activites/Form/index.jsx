import {
	Button,
	Card,
	CardContent,
	CardHeader,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useActiviteForm } from "../../../hooks/activite";
import useCategorieActivite from "../../../hooks/categorieActivite";
import { appendActivite, updateActivite } from "../../../redux/activiteSlice";
import { addActivite, editActivite } from "../../../services/activites";
import "./index.css";

const ActiviteForm = (props) => {
	const [categorie_activites] = useCategorieActivite();
	const formik = useActiviteForm({ ...props });
	return (
		<div className='active'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
					<form className='activite-form' onSubmit={formik.handleSubmit}>
						<TextField
							id='nom'
							label='Nom'
							name='nom'
							value={formik.values.nom}
							onChange={formik.handleChange}
							error={
								formik.touched.nom && Boolean(formik.errors.nom)
							}
							variant='outlined'
							helperText={formik.touched.nom && formik.errors.nom}
						/>
						<FormControl
							fullWidth
							error={
								formik.touched.categorie_activite_id &&
								Boolean(formik.errors.categorie_activite_id)
							}>
							<InputLabel id='categorie-activite-select-label'>
								Categorie de l'activité
							</InputLabel>
							<Select
								id='categorie-activite-select'
								name='categorie_activite_id'
								label="Categorie de l'activité"
								value={formik?.values.categorie_activite_id}
								labelId='categorie-activite-select-label'
								onChange={formik.handleChange}>
								{categorie_activites.map(
									(categorie_activite) => (
										<MenuItem
											key={categorie_activite.id}
											value={categorie_activite.id}>
											{categorie_activite.nom}
										</MenuItem>
									),
								)}
							</Select>
							<FormHelperText>
								{formik.touched.categorie_activite_id &&
									formik.errors.categorie_activite_id}
							</FormHelperText>
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
export const ActiviteAdd = (props) => {
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		try {
			const response = await addActivite(values);
			dispatch(appendActivite(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<ActiviteForm
			title='Ajouter une activité'
			button='Ajouter'
			onSubmit={onSubmit}
		/>
	);
};

export const ActiviteEdit = (props) => {
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		try {
			const response = await editActivite(props.activite.id, values);
			dispatch(updateActivite(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<ActiviteForm
			title='Modifier une activité'
			button='Modifier'
			activite={props.activite}
			onSubmit={onSubmit}
		/>
	);
};

export default ActiviteForm;
