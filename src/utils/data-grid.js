export const getObjectName = (params) => params.row.nom;

export const getActiviteName = (params) => params.row.activite.nom;

export const getTypeInstallationName = (params) =>
	params.row.type_installation.nom;

export const getZoneName = (params) => params.row.zone.nom;

export const getPartitionName = (params) => params.row.partition.nom;

export const getCategorieName = (params) =>
	params.row.activite.categorie_activite.nom;

export const getPavillonNumber = (params) => params.row.pavillon.numero;

export const getFullName = (params) =>
	`${params.row.client.nom} ${params.row.client.prenom}`;

export const totalFrais = (params) => {
	const frais = params.row.frais;
	const total = frais * params.row.mois_a_payer;
	return <div>{total}</div>;
};
