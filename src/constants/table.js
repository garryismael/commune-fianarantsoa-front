import {
	totalFrais,
	getActiviteName,
	getCategorieName,
	getFullName,
	getObjectName,
	getPartitionName,
	getPavillonNumber,
	getTypeInstallationName,
	getZoneName,
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
		valueGetter: getFullName,
		flex: 1,
	},
	{ field: "frais", headerName: "Frais", flex: 1 },
	{ field: "mois_a_payer", headerName: "Mois à payer", flex: 1 },
	{
		field: "total_a_payer",
		headerName: "Total à payer",
		renderCell: totalFrais,
		flex: 1 
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
		renderCell: totalFrais,
		flex: 1 
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

export const columnsCategorieActivite = [
	{
		id: "id",
		label: "Id",
	},
	{
		id: "nom",
		label: "Nom",
	},
	{
		id: "actions",
		label: "Actions",
	},
];
export const columnsZone = [
	{
		id: "id",
		label: "Id",
	},
	{
		id: "nom",
		label: "Nom",
	},
	{
		id: "actions",
		label: "Actions",
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
	{
		id: "id",
		label: "id",
	},
	{
		client: "client",
		label: "Client",
	},
	{
		id: "pavillon",
		label: "Numéro pavillon",
	},
	{
		id: "utilisateur",
		label: "Utilisateur",
	},
	{
		id: "date",
		label: "Date",
	},
	{
		id: "verification",
		label: "Status",
	},
	{
		id: "total",
		label: "Total",
	},
];
