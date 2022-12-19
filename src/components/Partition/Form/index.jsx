import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { partitionForm } from "../../../constants/form";
import useForm from "../../../hooks/form";
import {
  appendPartition,
  updatePartition,
} from "../../../redux/partitionSlice";
import { addPartition, editPartition } from "../../../services/partition";
import { getValidationSchema } from "../../../validations/common-form";
import "./index.css";

const PartitionForm = (props) => {
	const validationSchema = getValidationSchema(partitionForm);
	const formik = useForm({ ...props, validationSchema });

	return (
		<div className='partition'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
					<form
						className='partition-form'
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
export const PartitionAdd = (props) => {
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		try {
			const response = await addPartition(values);
			dispatch(appendPartition(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<PartitionForm
			title='Ajouter une partition'
			button='Ajouter'
			create={true}
			onSubmit={onSubmit}
		/>
	);
};

export const PartitionEdit = (props) => {
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		try {
			const response = await editPartition(props.partition.id, values);
			dispatch(updatePartition(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<PartitionForm
			title='Modifier une partition'
      data={props.partition}
			button='Modifier'
			onSubmit={onSubmit}
		/>
	);
};

export default PartitionForm;
