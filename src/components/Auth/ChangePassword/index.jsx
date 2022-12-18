import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useChangePassword } from "../../../hooks/auth";

export default function ResetPassword() {
	const [mot_de_passe, setMotDePasse, handleSubmit] = useChangePassword();
	return (
		<Box
			component='form'
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete='off'>
			<TextField
				id='password'
				onChange={(e) => setMotDePasse(e.target.value)}
				label='Mot de passe'
				variant='outlined'
			/>
		</Box>
	);
}
