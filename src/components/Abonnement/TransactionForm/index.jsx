import {
	Button,
	Card,
	CardContent,
	CardHeader,
	TextField,
} from "@mui/material";
import React from "react";
import "./index.css";
import { useTransactionForm } from "../../../hooks/transaction";

const TransactionForm = (props) => {
	const formik = useTransactionForm({...props});

	return (
		<div className='transaction'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title='Ajouter une transaction' />
				<CardContent>
					<form
						className='transaction-form'
						onSubmit={formik.handleSubmit}>
						<TextField
							id='total_mois'
							name='total_mois'
							label='Total Mois'
							type='number'
							value={formik.values.total_mois}
							onChange={formik.handleChange}
							error={
								formik.touched.total_mois && Boolean(formik.errors.total_mois)
							}
							variant='outlined'
							helperText={formik.touched.total_mois && formik.errors.total_mois}
						/>
						<Button
							variant='contained'
							className='button-form'
							type='submit'>
							Sauvegarder
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default TransactionForm;
