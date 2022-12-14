import * as yup from "yup";

export const clientValidationSchema = yup.object({
	nom: yup
		.string("Entrer le nom")
		.min(3, "Le nom doit comporter au moins 3 caractères.")
		.required("Le nom est requis"),
	prenom: yup
		.string("Entrer le prénom")
		.min(3, "Le prénom doit comporter au moins 3 caractères.")
		.required("Le prénom est requis"),
	adresse: yup
		.string("Entrer l'adresse")
		.min(3, "L'adresse doit comporter au moins 3 caractères.")
		.required("L'adresse est requis"),
	contact: yup
		.string("Entrer le contact")
		.min(3, "Le contact doit comporter au moins 3 caractères.")
		.required("Le contact est requis"),
});
