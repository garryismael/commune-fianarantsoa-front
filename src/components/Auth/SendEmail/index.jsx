import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useResetPassword } from "../../../hooks/auth";

export default function SendEmail() {
	const [email, setEmail, handleSubmit] = useResetPassword();
	return (
		<Box
			component='form'
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete='off'>
			<TextField
				id='email'
				label='Email'
				onChange={(e) => setEmail(e.target.value)}
				variant='outlined'
			/>
		</Box>
	);
}
