const columnActions = (renderCell) => ({
	field: "action",
	headerName: "Actions",
	flex: 1,
	sortable: false,
	filterable: false,
	disableClickEventBubbling: true,
	renderCell,
});

export const columnsAdmin = [
	{
		id: "id",
		label: "Id",
	},
	{
		id: "nom",
		label: "Nom",
		minWidth: 30,
	},
	{
		id: "prenom",
		label: "Prénoms",
		minWidth: 30,
	},
	{
		id: "adresse",
		label: "Adresse",
	},
	{
		id: "email",
		label: "Email",
	},
	{
		id: "contact",
		label: "Contact",
	},
	{
		id: "actions",
		label: "Actions",
	},
];

export const columnsClient = [
	{
		id: "id",
		label: "Id",
	},
	{
		id: "nom",
		label: "Nom",
		minWidth: 30,
	},
	{
		id: "prenom",
		label: "Prénoms",
		minWidth: 30,
	},
	{
		id: "adresse",
		label: "Adresse",
	},
	{
		id: "contact",
		label: "Contact",
	},
	{
		id: "actions",
		label: "Actions",
	},
];

export const columnsAbonnement = [
	{
		id: "id",
		label: "Id",
	},
	{
		id: "nom",
		label: "Nom",
	},
	{
		id: "prenom",
		label: "Prénoms",
	},
	{
		id: "frais",
		label: "Frais",
	},
	{
		id: "mois_a_payer",
		label: "Mois à payer",
	},
	{
		id: "partition",
		label: "Partition",
	},
	{
		id: "categorie",
		label: "Categorie",
	},
	{
		id: "activite",
		label: "Activité",
	},
	{
		id: "type_installation",
		label: "Type Installation",
	},
	{
		id: "zone",
		label: "Zone",
	},
	{
		id: "pavillon",
		label: "N°PAV",
	},
	{
		id: "actions",
		label: "Actions",
	},
];

export const columnsClientAbonnement = [
	{
		id: "id",
		label: "Id",
	},
	{
		id: "frais",
		label: "Frais",
	},
	{
		id: "mois_a_payer",
		label: "Mois à payer",
	},
	{
		id: "total_a_payer",
		label: "Total à payer",
	},
	{
		id: "partition",
		label: "Partition",
	},
	{
		id: "categorie",
		label: "Categorie",
	},
	{
		id: "activite",
		label: "Activité",
	},
	{
		id: "type_installation",
		label: "Type Installation",
	},
	{
		id: "zone",
		label: "Zone",
	},
	{
		id: "pavillon",
		label: "N°PAV",
	},
	{
		id: "actions",
		label: "Actions",
	},
];

export const columnsPavillon = [
	{
		id: "id",
		label: "Id",
	},
	{
		id: "numero",
		label: "Numero",
	},
	{
		id: "actions",
		label: "Actions",
	},
];
export const columnsActivite = [
	{
		id: "id",
		label: "Id",
	},
	{
		id: "nom",
		label: "Nom",
	},
	{
		id: "categorie",
		label: "Catégorie",
	},
	{
		id: "actions",
		label: "Actions",
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
