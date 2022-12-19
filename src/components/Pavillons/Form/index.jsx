import {
	Button,
	Card,
	CardContent,
	CardHeader,
	TextField,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { usePavillonForm } from "../../../hooks/pavillon";
import { appendPavillon, updatePavillon } from "../../../redux/pavillonSlice";
import { addPavillon, editPavillon } from "../../../services/pavillons";
import "./index.css";

const PavillonForm = (props) => {
	const formik = usePavillonForm({ ...props });

	return (
		<div className='pavillon'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
					<form
						className='pavillon-form'
						onSubmit={formik.handleSubmit}>
						<TextField
							id='numero'
							label='Numero du pavillon'
							name='numero'
							value={formik.values?.numero}
							onChange={formik.handleChange}
							error={
								formik.touched.numero &&
								Boolean(formik.errors.numero)
							}
							variant='outlined'
							helperText={
								formik.touched.numero && formik.errors.numero
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

export const PavillonAdd = (props) => {
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		try {
			const response = await addPavillon(values);
			dispatch(appendPavillon(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<PavillonForm
			title='Ajouter un pavillon'
			button='Ajouter'
			onSubmit={onSubmit}
		/>
	);
};

export const PavillonEdit = (props) => {
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		try {
			const response = await editPavillon(props.pavillon.id, values);
			dispatch(updatePavillon(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<PavillonForm
			title='Modifier un pavillon'
			button='Modifier'
			pavillon={props.pavillon}
			onSubmit={onSubmit}
		/>
	);
};

export default PavillonForm;
