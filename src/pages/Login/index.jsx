import { CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import React from "react";
import useLogin from "../../hooks/login";

import "./index.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
	const [setEmail, setPassword, loginUser] = useLogin();

	return (
		<div className='login'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title='Se connecter' />
				<CardContent>
					<form className='login-form' onSubmit={loginUser}>
						<TextField
							id='email'
							label='Email'
							name='email'
							variant='outlined'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							id='mot_de_passe'
							name='mot_de_passe'
							label='Mot de passe'
							variant='outlined'
							type='password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Link to='/sendEmail' className="send-email">mot de passe oublié ?</Link>
						<Button
							variant='contained'
							className='button-login'
							type='submit'>
							Se connecter
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default LoginPage;
