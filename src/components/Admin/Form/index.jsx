import { CardHeader, FormHelperText } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import React from "react";
import { useDispatch } from "react-redux";
import { useAdminEditForm, useAdminForm } from "../../../hooks/admin";
import { appendAdmin, updateAdmin } from "../../../redux/adminSlice";
import { addAdmin, editAdmin } from "../../../services/admin";

import "./index.css";

const CommonFields = (props) => {
	const { formik } = props;
	return (
		<>
			<TextField
				id='nom'
				name='nom'
				label='Nom'
				value={formik.values.nom}
				onChange={formik.handleChange}
				error={formik.touched.nom && Boolean(formik.errors.nom)}
				variant='outlined'
				helperText={formik.touched.nom && formik.errors.nom}
			/>
			<TextField
				id='prenom'
				name='prenom'
				label='Prénoms'
				value={formik.values.prenom}
				onChange={formik.handleChange}
				error={formik.touched.prenom && Boolean(formik.errors.prenom)}
				helperText={formik.touched.prenom && formik.errors.prenom}
			/>
			<TextField
				id='Email'
				name='email'
				label='Email'
				value={formik.values.email}
				onChange={formik.handleChange}
				error={formik.touched.email && Boolean(formik.errors.email)}
				variant='outlined'
				helperText={formik.touched.email && formik.errors.email}
			/>
			<TextField
				id='adresse'
				name='adresse'
				label='Adresse'
				value={formik.values.adresse}
				onChange={formik.handleChange}
				error={formik.touched.adresse && Boolean(formik.errors.adresse)}
				variant='outlined'
				helperText={formik.touched.adresse && formik.errors.adresse}
			/>
			<TextField
				id='contact'
				name='contact'
				label='Contact'
				value={formik.values.contact}
				onChange={formik.handleChange}
				error={formik.touched.contact && Boolean(formik.errors.contact)}
				variant='outlined'
				helperText={formik.touched.contact && formik.errors.contact}
			/>
			<FormControl
				fullWidth
				error={
					formik.touched.est_admin && Boolean(formik.errors.est_admin)
				}>
				<FormLabel id='est_admin'>Est admin?</FormLabel>
				<RadioGroup
					row
					aria-labelledby='est_admin'
					name='est_admin'
					value={formik.values.est_admin}
					onChange={formik.handleChange}>
					<FormControlLabel
						value={true}
						control={<Radio />}
						label='Oui'
					/>
					<FormControlLabel
						value={false}
						control={<Radio />}
						label='Non'
					/>
				</RadioGroup>
				<FormHelperText>
					{formik.touched.est_admin && formik.errors.est_admin}
				</FormHelperText>
			</FormControl>
		</>
	);
};

export const AdminAdd = (props) => {
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		try {
			const response = await addAdmin(values);
			dispatch(appendAdmin(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	const formik = useAdminForm({ ...props, onSubmit });

	return (
		<div className='admin'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title='Ajouter un utilisateur' />
				<CardContent>
					<form className='admin-form' onSubmit={formik.handleSubmit}>
						<CommonFields formik={formik} />
						<TextField
							id='mot_de_passe'
							name='mot_de_passe'
							label='Mot de passe'
							value={formik.values.mot_de_passe}
							onChange={formik.handleChange}
							error={
								formik.touched.mot_de_passe &&
								Boolean(formik.errors.mot_de_passe)
							}
							variant='outlined'
							helperText={
								formik.touched.mot_de_passe &&
								formik.errors.mot_de_passe
							}
						/>
						<Button
							variant='contained'
							className='button-form'
							type='submit'>
							Ajouter
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export const AdminEdit = (props) => {
	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		try {
			const response = await editAdmin(props.utilisateur.id, values);
			dispatch(updateAdmin(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	const formik = useAdminEditForm({ ...props, onSubmit });

	return (
		<div className='admin'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title='Modifier un utilisateur' />
				<CardContent>
					<form className='admin-form' onSubmit={formik.handleSubmit}>
						<CommonFields formik={formik} />
						<Button
							variant='contained'
							className='button-form'
							type='submit'>
							Modifier
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};
