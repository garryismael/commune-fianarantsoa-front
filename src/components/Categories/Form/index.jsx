import {
	Button,
	Card,
	CardContent,
	CardHeader,
	TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { categorieForm } from "../../../constants/form";
import useForm from "../../../hooks/form";
import {
	appendCategorieActivite,
	updateCategorieActivite,
} from "../../../redux/categorieActiviteSlice";
import {
	addCategorieActivite,
	editCategorieActivite,
} from "../../../services/categorieActivite";
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
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		try {
			const response = await addCategorieActivite(values);
			dispatch(appendCategorieActivite(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<CategorieActiviteForm
			title='Ajouter une Catégorie '
			button='Ajouter'
			onSubmit={onSubmit}
		/>
	);
};

export const CategorieActiviteEdit = (props) => {
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		try {
			const response = await editCategorieActivite(
				props.categorie_activite.id,
				values,
			);
			dispatch(updateCategorieActivite(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

    console.log(props.categorie_activite);
	return (
		<CategorieActiviteForm
			title='Modifier une catégorie'
			button='Modifier'
			data={props.categorie_activite}
			handleSubmit={onSubmit}
		/>
	);
};

export default CategorieActiviteForm;
