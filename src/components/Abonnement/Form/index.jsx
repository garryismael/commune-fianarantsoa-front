import {
	CardHeader,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import React from "react";
import { useDispatch } from "react-redux";
import { useAbonnementForm } from "../../../hooks/abonnement";
import useActivite from "../../../hooks/activite";
import useClient from "../../../hooks/client";
import usePartition from "../../../hooks/partition";
import { useNotUsedPavillon } from "../../../hooks/pavillon";
import useTypeInstallation from "../../../hooks/typeInstallation";
import useZone from "../../../hooks/zone";
import {
	appendAbonnement,
	updateAbonnement,
} from "../../../redux/abonnementSlice";
import { addAbonnement, editAbonnement } from "../../../services/abonnement";

import "./index.css";

const AbonnementForm = (props) => {
	const formik = useAbonnementForm({
		abonnement: props.abonnement,
		onSubmit: props.handleSubmit,
	});
	const [clients] = useClient();
	const [activites] = useActivite();
	const [zones] = useZone();
	const [partitions] = usePartition();
	const [type_installations] = useTypeInstallation();

	return (
		<div className='abonnement'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
					<form
						className='abonnement-form'
						onSubmit={formik.handleSubmit}>
						<TextField
							id='frais'
							name='frais'
							label='Frais'
							type='number'
							value={formik.values.frais}
							onChange={formik.handleChange}
							error={
								formik.touched.frais &&
								Boolean(formik.errors.frais)
							}
							variant='outlined'
							helperText={
								formik.touched.frais && formik.errors.frais
							}
						/>
						<TextField
							id='mois_a_payer'
							name='mois_a_payer'
							type='number'
							label='Mois à payer'
							value={formik.values.mois_a_payer}
							onChange={formik.handleChange}
							error={
								formik.touched.mois_a_payer &&
								Boolean(formik.errors.mois_a_payer)
							}
							variant='outlined'
							helperText={
								formik.touched.mois_a_payer &&
								formik.errors.mois_a_payer
							}
						/>
						<FormControl
							fullWidth
							error={
								formik.touched.client_id &&
								Boolean(formik.errors.client_id)
							}>
							<InputLabel id='client-select-label'>
								Client
							</InputLabel>
							<Select
								id='client-select'
								name='client_id'
								label='Client'
								value={formik.values.client_id}
								labelId='client-select-label'
								onChange={formik.handleChange}
								variant='outlined'>
								{clients.map((client) => (
									<MenuItem key={client.id} value={client.id}>
										{client.nom} {client.prenom}
									</MenuItem>
								))}
							</Select>
							<FormHelperText>
								{formik.touched.client_id &&
									formik.errors.client_id}
							</FormHelperText>
						</FormControl>
						<FormControl
							fullWidth
							error={
								formik.touched.activite_id &&
								Boolean(formik.errors.activite_id)
							}>
							<InputLabel id='activite-select-label'>
								Activite
							</InputLabel>
							<Select
								id='activite-select'
								name='activite_id'
								label='Activite'
								value={formik.values.activite_id}
								labelId='activite-select-label'
								onChange={formik.handleChange}
								variant='outlined'>
								{activites.map((activite) => (
									<MenuItem
										key={activite.id}
										value={activite.id}>
										{activite.nom}
									</MenuItem>
								))}
							</Select>
							<FormHelperText>
								{formik.touched.activite_id &&
									formik.errors.activite_id}
							</FormHelperText>
						</FormControl>
						<FormControl
							fullWidth
							error={
								formik.touched.zone_id &&
								Boolean(formik.errors.zone_id)
							}>
							<InputLabel id='zone-select-label'>Zone</InputLabel>
							<Select
								id='zone-select'
								name='zone_id'
								label='Zone'
								value={formik.values.zone_id}
								labelId='zone-select-label'
								onChange={formik.handleChange}
								variant='outlined'>
								{zones.map((zone) => (
									<MenuItem key={zone.id} value={zone.id}>
										{zone.nom}
									</MenuItem>
								))}
							</Select>
							<FormHelperText>
								{formik.touched.zone_id &&
									formik.errors.zone_id}
							</FormHelperText>
						</FormControl>
						<FormControl
							fullWidth
							error={
								formik.touched.partition_id &&
								Boolean(formik.errors.partition_id)
							}>
							<InputLabel id='partition-select-label'>
								Partition
							</InputLabel>
							<Select
								id='partition-select'
								name='partition_id'
								label='Partition'
								value={formik.values.partition_id}
								labelId='partition-select-label'
								onChange={formik.handleChange}
								variant='outlined'>
								{partitions.map((partition) => (
									<MenuItem
										key={partition.id}
										value={partition.id}>
										{partition.nom}
									</MenuItem>
								))}
							</Select>
							<FormHelperText>
								{formik.touched.partition_id &&
									formik.errors.partition_id}
							</FormHelperText>
						</FormControl>
						<FormControl
							fullWidth
							error={
								formik.touched.type_installation_id &&
								Boolean(formik.errors.type_installation_id)
							}>
							<InputLabel id='type-installation-select-label'>
								Type Installation
							</InputLabel>
							<Select
								id='type-installation-select'
								name='type_installation_id'
								label='Partition'
								value={formik.values.type_installation_id}
								labelId='type-installation-select-label'
								onChange={formik.handleChange}
								variant='outlined'>
								{type_installations.map((type_installation) => (
									<MenuItem
										key={type_installation.id}
										value={type_installation.id}>
										{type_installation.nom}
									</MenuItem>
								))}
							</Select>
							<FormHelperText>
								{formik.touched.type_installation_id &&
									formik.errors.type_installation_id}
							</FormHelperText>
						</FormControl>
						<FormControl
							fullWidth
							error={
								formik.touched.pavillon_id &&
								Boolean(formik.errors.pavillon_id)
							}>
							<InputLabel id='pavillon-select-label'>
								Pavillon
							</InputLabel>
							<Select
								id='pavillon-select'
								name='pavillon_id'
								label='Pavillon'
								value={formik.values.pavillon_id}
								labelId='pavillon-select-label'
								onChange={formik.handleChange}
								variant='outlined'>
								{props.pavillons.map((pavillon) => (
									<MenuItem
										key={pavillon.id}
										value={pavillon.id}>
										{pavillon.numero}
									</MenuItem>
								))}
							</Select>
							<FormHelperText>
								{formik.touched.pavillon_id &&
									formik.errors.pavillon_id}
							</FormHelperText>
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
};

export const AbonnementAdd = (props) => {
	const dispatch = useDispatch();
	const [pavillons] = useNotUsedPavillon();

	const handleSubmit = async (values) => {
		try {
			const response = await addAbonnement(values);
			dispatch(appendAbonnement(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<AbonnementForm
			title='Ajouter un Abonnement'
			button='Ajouter'
			handleSubmit={handleSubmit}
			pavillons={pavillons}
		/>
	);
};

export const AbonnementEdit = (props) => {
	const dispatch = useDispatch();
	const [pavillons] = useNotUsedPavillon();

	const handleSubmit = async (values) => {
		try {
			const response = await editAbonnement(props.abonnement.id, values);
			dispatch(updateAbonnement(response.data));
			props.handleClose();
		} catch (errors) {
			console.error(errors);
		}
	};

	return (
		<AbonnementForm
			title='Modifier un Abonnement'
			button='Modifier'
			handleSubmit={handleSubmit}
			abonnement={props.abonnement}
			pavillons={pavillons.concat(props.abonnement.pavillon)}
		/>
	);
};

export default AbonnementForm;
