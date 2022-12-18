import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function LoginForm() {
	return (
		<Box
			component='form'
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete='off'>
			<TextField id='email' label='Email' variant='outlined' />
			<TextField id='password' label='Mot de passe' variant='outlined' />
		</Box>
	);
}
