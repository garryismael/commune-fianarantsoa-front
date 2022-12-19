import * as yup from "yup";

export const abonnementValidationSchema = yup.object({
	frais: yup
		.number("Entrer votre nom")
		.min(0, "Le frais doit avoir une valeur positive.")
		.required("Le frais est requis"),
	mois_a_payer: yup
		.number("Entrer votre prénom")
		.min(0, "Ce champ doit avoir une valeur positive.")
		.required("Le mois à payer est requis"),
	client_id: yup
		.string("Entre votre adresse")
		.min(1, "Client invalide.")
		.required("Le client est requis"),
	activite_id: yup
		.string("Entre votre contact")
		.min(1, "L'activité invalide.")
		.required("L'activité est requis"),
	zone_id: yup
		.string("Entre votre contact")
		.min(1, "La zone invalide.")
		.required("La zone est requis"),
	partition_id: yup
		.string("Entre votre contact")
		.min(1, "La partition invalide.")
		.required("La partition est requis"),
	type_installation_id: yup
		.string("Entre votre contact")
		.min(1, "Le type d'installation invalide.")
		.required("Le type d'installation est requis"),
	pavillon_id: yup
		.string("Entre votre contact")
		.min(1, "Le pavillon invalide.")
		.required("Le pavillon est requis"),
});
