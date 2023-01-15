import SendIcon from '@mui/icons-material/Send';
import LoadingButton from "@mui/lab/LoadingButton";
import { Card, CardContent, CardHeader } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useResetPassword } from "../../../hooks/auth";

import "./index.css";

export default function SendEmail() {
	const [email, setEmail, handleSubmit] = useResetPassword();
	const [loading, setLoading] = React.useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		await handleSubmit();
		setLoading(false);
	};

	return (
		<div className='login'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader
					title='Récupérez votre compte'
					className='send-email-header'
				/>
				<CardContent>
					<form className='login-form' onSubmit={onSubmit}>
						<TextField
							id='email'
							label='Entrez votre adresse e-mail'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							variant='outlined'
						/>
						<LoadingButton
							loading={loading}
							loadingPosition='end'
							endIcon={<SendIcon />}
							variant='contained'
							type='submit'>
							Envoyer un email
						</LoadingButton>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
