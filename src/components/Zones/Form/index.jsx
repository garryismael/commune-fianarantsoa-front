import {
	Button,
	Card,
	CardContent,
	CardHeader,
	TextField,
} from "@mui/material";
import { zoneForm } from "../../../constants/form";
import useForm from "../../../hooks/form";
import { getValidationSchema } from "../../../validations/common-form";
import "./index.css";

const ZoneForm = (props) => {
	const validationSchema = getValidationSchema(zoneForm);
	const formik = useForm({ ...props, validationSchema });

	return (
		<div className='zone'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
					<form className='zone-form' onSubmit={formik.handleSubmit}>
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
export const ZoneAdd = (props) => {
	return (
		<ZoneForm
			title='Ajouter une zone'
			button='Ajouter'
			onSubmit={props.onSubmit}
		/>
	);
};

export const ZoneEdit = (props) => {
	return (
		<ZoneForm
			title='Modifier une zone'
			button='Modifier'
			data={props.zone}
			onSubmit={props.onSubmit}
		/>
	);
};

export default ZoneForm;
