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
import React from "react";
import useAbonnement from "../../../hooks/abonnement";
import "./index.css";

function TransactionForm(props) {
	const [abonnements] = useAbonnement();
	return (
		<div className='transaction'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
					<form
						className='transaction-form'
						onSubmit={props.handleSubmit}>
						<TextField
							id='total_mois'
							label='Total Mois'
							name='total_mois'
							type='number'
							value={props.values.total_mois}
							variant='outlined'
							onChange={props.onChange}
						/>
						<FormControl fullWidth>
							<InputLabel id='client-select-label'>
								Abonnement
							</InputLabel>
							<Select
								id='abonnement-select'
								name='abonnement_id'
								label='Abonnement'
								value={props?.values.abonnement_id || ""}
								labelId='abonnement-select-label'
								onChange={props.onChange}>
								{abonnements.map((abonnement) => (
									<MenuItem
										key={abonnement.id}
										value={abonnement.id}>
										{abonnement.pavillon.numero} -{" "}
										{abonnement.client.nom} -{" "}
										{abonnement.client.prenom}
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
}

export default TransactionForm;
