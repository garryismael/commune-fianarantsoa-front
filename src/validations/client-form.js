import * as yup from "yup";

export const clientValidationSchema = yup.object({
	nom: yup
		.string("Entrer votre nom")
		.min(3, "Ce champ doit comporter au moins 3 caractères.")
		.required("Ce champ est requis"),
	prenom: yup
		.string("Entrer votre prénom")
		.min(3, "Ce champ doit comporter au moins 3 caractères.")
		.required("Ce champ est requis"),
	adresse: yup
		.string("Entre votre adresse")
		.min(3, "Ce champ doit comporter au moins 3 caractères.")
		.required("Ce champ est requis"),
	contact: yup
		.string("Entre votre contact")
		.min(3, "Ce champ doit comporter au moins 3 caractères.")
		.required("Ce champ est requis"),
});
