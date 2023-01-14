import {
	getAbonnementClientFullName,
	getAbonnementPavillonNumber,
	getActiviteName,
	getCategorieName,
	getClientFullName,
	getObjectName,
	getPartitionName,
	getPavillonNumber,
	getTypeInstallationName,
	getUserFullName,
	getVerificationLabel,
	getZoneName,
	totalFrais,
} from "../utils/data-grid";

const columnActions = (renderCell) => ({
	field: "action",
	headerName: "Actions",
	flex: 1,
	sortable: false,
	filterable: false,
	disableClickEventBubbling: true,
	renderCell,
});

export const columnsAdmin = (renderCell) => [
	{ field: "id", headerName: "Id", flex: 1 },
	{ field: "nom", headerName: "Nom", flex: 1 },
	{ field: "prenom", headerName: "Prénom", flex: 1 },
	{ field: "email", headerName: "E-mail", flex: 1 },
	{ field: "adresse", headerName: "Adresse", flex: 1 },
	{ field: "contact", headerName: "Contact", flex: 1 },
	{ ...columnActions(renderCell) },
];

export const columnsClient = (renderCell) => [
	{ field: "id", headerName: "Id", flex: 1 },
	{ field: "nom", headerName: "Nom", flex: 1 },
	{ field: "prenom", headerName: "Prénom", flex: 1 },
	{ field: "adresse", headerName: "Adresse", flex: 1 },
	{ field: "contact", headerName: "Contact", flex: 1 },
	{ ...columnActions(renderCell) },
];

export const columnsAbonnement = (renderCell) => [
	{ field: "id", headerName: "Id", flex: 1 },
	{
		field: "client",
		headerName: "Client",
		valueGetter: getClientFullName,
		flex: 1,
	},
	{ field: "frais", headerName: "Frais", flex: 1 },
	{ field: "mois_a_payer", headerName: "Mois à payer", flex: 1 },
	{
		field: "total_a_payer",
		headerName: "Total à payer",
		valueGetter: totalFrais,
		flex: 1,
	},
	{
		field: "partition",
		headerName: "Partition",
		valueGetter: getPartitionName,
		flex: 1,
	},
	{
		field: "activite2",
		headerName: "Categorie",
		valueGetter: getCategorieName,
		flex: 1,
	},
	{
		field: "activite",
		headerName: "Activité",
		valueGetter: getActiviteName,
		flex: 1,
	},
	{
		field: "type_installation",
		headerName: "Type Installation",
		valueGetter: getTypeInstallationName,
		flex: 1,
	},
	{
		field: "zone",
		headerName: "Zone",
		valueGetter: getZoneName,
		flex: 1,
	},
	{
		field: "pavillon",
		headerName: "N°PAV",
		valueGetter: getPavillonNumber,
		flex: 1,
	},
	{ ...columnActions(renderCell) },
];

export const columnsClientAbonnement = (renderCell) => [
	{ field: "id", headerName: "Id", flex: 1 },
	{
		field: "total_a_payer",
		headerName: "Total à payer",
		valueGetter: totalFrais,
		flex: 1,
	},
	{ field: "frais", headerName: "Frais", flex: 1 },
	{ field: "mois_a_payer", headerName: "Mois à payer", flex: 1 },
	{
		field: "partition",
		headerName: "Partition",
		valueGetter: getPartitionName,
		flex: 1,
	},
	{
		field: "activite2",
		headerName: "Categorie",
		valueGetter: getCategorieName,
		flex: 1,
	},
	{
		field: "activite",
		headerName: "Activité",
		valueGetter: getActiviteName,
		flex: 1,
	},
	{
		field: "type_installation",
		headerName: "Type Installation",
		valueGetter: getTypeInstallationName,
		flex: 1,
	},
	{
		field: "zone",
		headerName: "Zone",
		valueGetter: getZoneName,
		flex: 1,
	},
	{
		field: "pavillon",
		headerName: "N°PAV",
		valueGetter: getPavillonNumber,
		flex: 1,
	},
	{ ...columnActions(renderCell) },
];

export const columnsPavillon = (renderCell) => [
	{ field: "id", headerName: "Id", flex: 1 },
	{ field: "numero", headerName: "Numéro", flex: 1 },
	{
		...columnActions(renderCell),
	},
];

export const columnsActivite = (renderCell) => [
	{ field: "id", headerName: "Id", flex: 1 },
	{ field: "nom", headerName: "Nom", flex: 1 },
	{
		field: "categorie",
		headerName: "Categorie",
		valueGetter: getObjectName,
		flex: 1,
	},
	{
		...columnActions(renderCell),
	},
];

export const commonColumns = (renderCell) => [
	{ field: "id", headerName: "Id", flex: 1 },
	{ field: "nom", headerName: "Nom", flex: 1 },
	{
		...columnActions(renderCell),
	},
];

export const columnsTransaction = [
	{ field: "id", headerName: "Id", flex: 1 },
	{
		field: "client",
		headerName: "Client",
		valueGetter: getAbonnementClientFullName,
		flex: 1,
	},
	{
		field: "pavillon",
		headerName: "N°PAV",
		valueGetter: getAbonnementPavillonNumber,
		flex: 1,
	},
	{
		field: "utilisateur",
		headerName: "Utilisateur",
		valueGetter: getUserFullName,
		flex: 1,
	},
	{
		field: "date",
		headerName: "Date",
		flex: 1,
	},
	{
		field: "verification",
		headerName: "Verification",
		valueGetter: getVerificationLabel,
		flex: 1,
	},
	{
		field: "total_frais",
		headerName: "Total",
		flex: 1,
	},
];
