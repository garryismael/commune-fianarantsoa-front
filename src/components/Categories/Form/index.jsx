import {
	Button,
	Card,
	CardContent,
	CardHeader,
	TextField,
} from "@mui/material";
import { categorieForm } from "../../../constants/form";
import useForm from "../../../hooks/form";
import { getValidationSchema } from "../../../validations/common-form";
import "./index.css";

const CategorieActiviteForm = (props) => {
	const validationSchema = getValidationSchema(categorieForm);
	const formik = useForm({ ...props, validationSchema });
	return (
		<div className='categorie-activite'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
					<form
						className='categorie-activite-form'
						onSubmit={formik.handleSubmit}>
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
export const CategorieActiviteAdd = (props) => {
	return (
		<CategorieActiviteForm
			title='Ajouter une Catégorie '
			button='Ajouter'
			onSubmit={props.onSubmit}
		/>
	);
};

export const CategorieActiviteEdit = (props) => {
	return (
		<CategorieActiviteForm
			title='Modifier une catégorie'
			button='Modifier'
			data={props.categorie_activite}
			onSubmit={props.onSubmit}
		/>
	);
};

export default CategorieActiviteForm;
