export const getObjectName = (params) => params.row.nom;

export const getActiviteName = (params) => params.row.activite.nom;

export const getTypeInstallationName = (params) =>
	params.row.type_installation.nom;

export const getZoneName = (params) => params.row.zone.nom;

export const getPartitionName = (params) => params.row.partition.nom;

export const getCategorieName = (params) =>
	params.row.activite.categorie_activite.nom;

export const getPavillonNumber = (params) => params.row.pavillon.numero;

export const getAbonnementPavillonNumber = (params) => params.row.abonnement.pavillon.numero;

export const getClientFullName = (params) =>
	`${params.row.client.nom} ${params.row.client.prenom}`;

export const getAbonnementClientFullName = (params) => 
	`${params.row.abonnement.client.nom} ${params.row.abonnement.client.prenom}`;

export const getUserFullName = (params) =>
	`${params.row.utilisateur.nom} ${params.row.utilisateur.prenom}`;

export const totalFrais = (params) => {
	const frais = params.row.frais;
	const total = frais * params.row.mois_a_payer;
	return total
};

export const getVerificationLabel = (params) => {
	const est_verifie = params.row.est_verifie;
	return est_verifie ? "Vérifié" : "En Cours";
}