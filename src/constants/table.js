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
	getZoneName,
	totalFrais,
} from "../utils/data-grid";

const columnActions = (renderCell) => ({
	field: "action",
	headerClassName: "data-table-header",
	headerName: "Actions",
	flex: 1,
	sortable: false,
	filterable: false,
	disableClickEventBubbling: true,
	renderCell,
});

export const columnsAdmin = (renderCell) => [
	{
		field: "id",
		headerClassName: "data-table-header",
		headerName: "Id",
		flex: 1,
	},
	{
		field: "nom",
		headerClassName: "data-table-header",
		headerName: "Nom",
		flex: 1,
	},
	{
		field: "prenom",
		headerClassName: "data-table-header",
		headerName: "Prénom",
		flex: 1,
	},
	{
		field: "email",
		headerClassName: "data-table-header",
		headerName: "E-mail",
		flex: 1,
	},
	{
		field: "adresse",
		headerClassName: "data-table-header",
		headerName: "Adresse",
		flex: 1,
	},
	{
		field: "contact",
		headerClassName: "data-table-header",
		headerName: "Contact",
		flex: 1,
	},
	{ ...columnActions(renderCell) },
];

export const columnsClient = (renderCell) => [
	{
		field: "id",
		headerClassName: "data-table-header",
		headerName: "Id",
		flex: 1,
	},
	{
		field: "nom",
		headerClassName: "data-table-header",
		headerName: "Nom",
		flex: 1,
	},
	{
		field: "prenom",
		headerClassName: "data-table-header",
		headerName: "Prénom",
		flex: 1,
	},
	{
		field: "adresse",
		headerClassName: "data-table-header",
		headerName: "Adresse",
		flex: 1,
	},
	{
		field: "contact",
		headerClassName: "data-table-header",
		headerName: "Contact",
		flex: 1,
	},
	{ ...columnActions(renderCell) },
];

export const columnsAbonnement = (renderCell) => [
	{
		field: "id",
		headerClassName: "data-table-header",
		headerName: "Id",
		flex: 1,
	},
	{
		field: "client",
		headerClassName: "data-table-header",
		headerName: "Client",
		valueGetter: getClientFullName,
		flex: 1,
	},
	{
		field: "frais",
		headerClassName: "data-table-header",
		headerName: "Frais",
		flex: 1,
	},
	{
		field: "mois_a_payer",
		headerClassName: "data-table-header",
		headerName: "Mois à payer",
		flex: 1,
	},
	{
		field: "total_a_payer",
		headerClassName: "data-table-header",
		headerName: "Total à payer",
		valueGetter: totalFrais,
		flex: 1,
	},
	{
		field: "partition",
		headerClassName: "data-table-header",
		headerName: "Partition",
		valueGetter: getPartitionName,
		flex: 1,
	},
	{
		field: "activite2",
		headerClassName: "data-table-header",
		headerName: "Categorie",
		valueGetter: getCategorieName,
		flex: 1,
	},
	{
		field: "activite",
		headerClassName: "data-table-header",
		headerName: "Activité",
		valueGetter: getActiviteName,
		flex: 1,
	},
	{
		field: "type_installation",
		headerClassName: "data-table-header",
		headerName: "Type Installation",
		valueGetter: getTypeInstallationName,
		flex: 1,
	},
	{
		field: "zone",
		headerClassName: "data-table-header",
		headerName: "Zone",
		valueGetter: getZoneName,
		flex: 1,
	},
	{
		field: "pavillon",
		headerClassName: "data-table-header",
		headerName: "N°PAV",
		valueGetter: getPavillonNumber,
		flex: 1,
	},
	{ ...columnActions(renderCell) },
];

export const columnsClientAbonnement = (renderCell) => [
	{
		field: "id",
		headerClassName: "data-table-header",
		headerName: "Id",
		flex: 1,
	},
	{
		field: "total_a_payer",
		headerClassName: "data-table-header",
		headerName: "Total à payer",
		valueGetter: totalFrais,
		flex: 1,
	},
	{
		field: "frais",
		headerClassName: "data-table-header",
		headerName: "Frais",
		flex: 1,
	},
	{
		field: "mois_a_payer",
		headerClassName: "data-table-header",
		headerName: "Mois à payer",
		flex: 1,
	},
	{
		field: "partition",
		headerClassName: "data-table-header",
		headerName: "Partition",
		valueGetter: getPartitionName,
		flex: 1,
	},
	{
		field: "activite2",
		headerClassName: "data-table-header",
		headerName: "Categorie",
		valueGetter: getCategorieName,
		flex: 1,
	},
	{
		field: "activite",
		headerClassName: "data-table-header",
		headerName: "Activité",
		valueGetter: getActiviteName,
		flex: 1,
	},
	{
		field: "type_installation",
		headerClassName: "data-table-header",
		headerName: "Type Installation",
		valueGetter: getTypeInstallationName,
		flex: 1,
	},
	{
		field: "zone",
		headerClassName: "data-table-header",
		headerName: "Zone",
		valueGetter: getZoneName,
		flex: 1,
	},
	{
		field: "pavillon",
		headerClassName: "data-table-header",
		headerName: "N°PAV",
		valueGetter: getPavillonNumber,
		flex: 1,
	},
	{ ...columnActions(renderCell) },
];

export const columnsPavillon = (renderCell) => [
	{
		field: "id",
		headerClassName: "data-table-header",
		headerName: "Id",
		flex: 1,
	},
	{
		field: "numero",
		headerClassName: "data-table-header",
		headerName: "Numéro",
		flex: 1,
	},
	{
		...columnActions(renderCell),
	},
];

export const columnsActivite = (renderCell) => [
	{
		field: "id",
		headerClassName: "data-table-header",
		headerName: "Id",
		flex: 1,
	},
	{
		field: "nom",
		headerClassName: "data-table-header",
		headerName: "Nom",
		flex: 1,
	},
	{
		field: "categorie",
		headerClassName: "data-table-header",
		headerName: "Categorie",
		valueGetter: getObjectName,
		flex: 1,
	},
	{
		...columnActions(renderCell),
	},
];

export const commonColumns = (renderCell) => [
	{
		field: "id",
		headerClassName: "data-table-header",
		headerName: "Id",
		flex: 1,
	},
	{
		field: "nom",
		headerClassName: "data-table-header",
		headerName: "Nom",
		flex: 1,
	},
	{
		...columnActions(renderCell),
	},
];

export const columnsTransaction = [
	{
		field: "id",
		headerClassName: "data-table-header",
		headerName: "Id",
		flex: 1,
	},
	{
		field: "client",
		headerClassName: "data-table-header",
		headerName: "Client",
		valueGetter: getAbonnementClientFullName,
		flex: 1,
	},
	{
		field: "pavillon",
		headerClassName: "data-table-header",
		headerName: "N°PAV",
		valueGetter: getAbonnementPavillonNumber,
		flex: 1,
	},
	{
		field: "utilisateur",
		headerClassName: "data-table-header",
		headerName: "Utilisateur",
		valueGetter: getUserFullName,
		flex: 1,
	},
	{
		field: "date",
		headerClassName: "data-table-header",
		headerName: "Date",
		flex: 1,
	},
	{
		field: "total_frais",
		headerClassName: "data-table-header",
		headerName: "Total",
		flex: 1,
	},
];
