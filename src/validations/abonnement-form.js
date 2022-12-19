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
		.min(1, "Le client est invalide.")
		.required("Le client est requis"),
	activite_id: yup
		.string("Entrer votre activité")
		.min(1, "L'activité est invalide.")
		.required("L'activité est requis"),
	zone_id: yup
		.string("Entre votre zone")
		.min(1, "La zone est invalide.")
		.required("La zone est requis"),
	partition_id: yup
		.string("Entre votre partition")
		.min(1, "La partition est invalide.")
		.required("La partition est requis"),
	type_installation_id: yup
		.string("Entre votre type d'installation")
		.min(1, "Le type d'installation est invalide.")
		.required("Le type d'installation est requis"),
	pavillon_id: yup
		.string("Entre votre pavillon")
		.min(1, "Le pavillon est invalide.")
		.required("Le pavillon est requis"),
});
