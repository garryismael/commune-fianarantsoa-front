import { Button, Card, CardContent, CardHeader } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useChangePassword } from "../../../hooks/auth";

export default function ChangePassword() {
	const [mot_de_passe, setMotDePasse, handleSubmit] = useChangePassword();
	return (
		<div className='login'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title='Changer votre mot de passe' />
				<CardContent>
					<form className='login-form' onSubmit={handleSubmit}>
						<TextField
							id='password'
							onChange={(e) => setMotDePasse(e.target.value)}
							label='Mot de passe'
							value={mot_de_passe}
							variant='outlined'
						/>
						<Button
							variant='contained'
							className='button-login'
							type='submit'>
							Changer
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
