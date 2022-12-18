import * as yup from "yup";

export const abonnementValidationSchema = yup.object({
	frais: yup
		.number("Entrer votre nom")
		.min(0, "Ce champ doit avoir une valeur positive.")
		.required("Ce champ est requis"),
	mois_a_payer: yup
		.number("Entrer votre prénom")
		.min(0, "Ce champ doit avoir une valeur positive.")
		.required("Ce champ est requis"),
	client_id: yup
		.string("Entre votre adresse")
		.min(1, "Ce valeur invalide.")
		.required("Ce champ est requis"),
	activite_id: yup
		.string("Entre votre contact")
		.min(1, "Ce valeur invalide.")
		.required("Ce champ est requis"),
	zone_id: yup
		.string("Entre votre contact")
		.min(1, "Ce valeur invalide.")
		.required("Ce champ est requis"),
	partition_id: yup
		.string("Entre votre contact")
		.min(1, "Ce valeur invalide.")
		.required("Ce champ est requis"),
	type_installation_id: yup
		.string("Entre votre contact")
		.min(1, "Ce valeur invalide.")
		.required("Ce champ est requis"),
	pavillon_id: yup
		.string("Entre votre contact")
		.min(1, "Ce valeur invalide.")
		.required("Ce champ est requis"),
});
