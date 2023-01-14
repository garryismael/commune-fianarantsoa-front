import { Button, Card, CardContent, CardHeader } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useResetPassword } from "../../../hooks/auth";

export default function SendEmail() {
	const [email, setEmail, handleSubmit] = useResetPassword();
	return (
		<div className='login'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title='Votre email' />
				<CardContent>
					<form className='login-form' onSubmit={handleSubmit}>
						<TextField
							id='email'
							label='Email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							variant='outlined'
						/>
						<Button
							variant='contained'
							className='button-login'
							type='submit'>
							Envoyer un email
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
