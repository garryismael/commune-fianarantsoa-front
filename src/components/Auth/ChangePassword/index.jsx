import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import { Card, CardContent, CardHeader } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useChangePassword } from "../../../hooks/auth";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
	const [loading, setLoading] = useState();
	const [mot_de_passe, setMotDePasse, handleSubmit] = useChangePassword();
	const navigate = useNavigate();
	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			await handleSubmit();
			setLoading(false);
			navigate("/");
		} catch (errors) {
			console.error(errors);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='login'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title='Changer votre mot de passe' />
				<CardContent>
					<form className='login-form' onSubmit={onSubmit}>
						<TextField
							id='password'
							onChange={(e) => setMotDePasse(e.target.value)}
							label='Mot de passe'
							value={mot_de_passe}
							variant='outlined'
							name='password'
							type='password'
						/>
						<LoadingButton
							color='secondary'
							loading={loading}
							loadingPosition='start'
							startIcon={<SaveIcon />}
							variant='contained'
							type='submit'>
							<span>Sauvegarder</span>
						</LoadingButton>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
