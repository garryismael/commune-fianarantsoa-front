import {
	Button,
	Card,
	CardContent,
	CardHeader,
	TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import useForm from "../../../hooks/form";
import { appendZone, updateZone } from "../../../redux/zoneSlice";
import { addZone, editZone } from "../../../services/zone";
import "./index.css";
import { getValidationSchema } from "../../../validations/common-form";
import { zoneForm } from "../../../constants/form";

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
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		try {
			const response = await addZone(values);
			dispatch(appendZone(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<ZoneForm
			title='Ajouter une zone'
			button='Ajouter'
			onSubmit={onSubmit}
		/>
	);
};

export const ZoneEdit = (props) => {
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		try {
			const response = await editZone(props.zone.id, values);
			dispatch(updateZone(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<ZoneForm
			title='Modifier une zone'
			button='Modifier'
			data={props.zone}
			onSubmit={onSubmit}
		/>
	);
};

export default ZoneForm;
