import { CardHeader, InputLabel, MenuItem, Select } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import React from "react";
import useActivite from "../../../hooks/activite";
import useClient from "../../../hooks/client";
import usePartition from "../../../hooks/partition";
import usePavillon from "../../../hooks/pavillon";
import useTypeInstallation from "../../../hooks/typeInstallation";
import useZone from "../../../hooks/zone";

import "./index.css";

const AbonnementForm = (props) => {
	const [clients] = useClient();
	const [activites] = useActivite();
	const [zones] = useZone();
	const [partitions] = usePartition();
	const [type_installations] = useTypeInstallation();
	const [pavillons] = usePavillon();

	return (
		<div className='admin'>
			<Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
					<form className='admin-form' onSubmit={props.handleSubmit}>
						<TextField
							id='frais'
							label='Frais'
							name='frais'
							type='number'
							value={props.values.frais}
							variant='outlined'
							onChange={props.onChange}
						/>
						<TextField
							id='mois_a_payer'
							name='mois_a_payer'
							label='Mois à payer'
							value={props.values.mois_a_payer}
							variant='outlined'
							onChange={props.onChange}
						/>
						<FormControl fullWidth>
							<InputLabel id='client-select-label'>
								Client
							</InputLabel>
							<Select
								id='client-select'
								name="client_id"
								label='Client'
								value={props.values.client_id}
								labelId='client-select-label'
								onChange={props.onChange}>
								{clients.map((client) => (
									<MenuItem key={client.id} value={client.id}>
										{client.nom} {client.prenom}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel id='activite-select-label'>
								Activite
							</InputLabel>
							<Select
								id='activite-select'
								name="activite_id"
								label='Activite'
								value={props.values.activite_id}
								labelId='activite-select-label'
								onChange={props.onChange}>
								{activites.map((activite) => (
									<MenuItem key={activite.id} value={activite.id}>
										{activite.nom}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel id='zone-select-label'>
								Zone
							</InputLabel>
							<Select
								id='zone-select'
								name="zone_id"
								label='Zone'
								value={props.values.zone_id}
								labelId='zone-select-label'
								onChange={props.onChange}>
								{zones.map((zone) => (
									<MenuItem key={zone.id} value={zone.id}>
										{zone.nom}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel id='partition-select-label'>
								Partition
							</InputLabel>
							<Select
								id='partition-select'
								name="partition_id"
								label='Partition'
								value={props.values.partition_id}
								labelId='partition-select-label'
								onChange={props.onChange}>
								{partitions.map((partition) => (
									<MenuItem key={partition.id} value={partition.id}>
										{partition.nom}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel id='type-installation-select-label'>
								Type Installation
							</InputLabel>
							<Select
								id='type-installation-select'
								name="type_installation_id"
								label='Partition'
								value={props.values.type_installation_id}
								labelId='type-installation-select-label'
								onChange={props.onChange}>
								{type_installations.map((type_installation) => (
									<MenuItem key={type_installation.id} value={type_installation.id}>
										{type_installation.nom}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel id='pavillon-select-label'>
								Pavillon
							</InputLabel>
							<Select
								id='pavillon-select'
								name="pavillon_id"
								label='Pavillon'
								value={props.values.pavillon_id}
								labelId='pavillon-select-label'
								onChange={props.onChange}>
								{pavillons.map((pavillon) => (
									<MenuItem key={pavillon.id} value={pavillon.id}>
										{pavillon.numero}
									</MenuItem>
								))}
							</Select>
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

export default AbonnementForm;
