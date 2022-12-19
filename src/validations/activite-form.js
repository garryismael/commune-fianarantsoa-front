import * as yup from "yup";

export const activiteValidationSchema = yup.object({
	nom: yup
		.string("Entrer le nom de l'activité")
		.min(3, "Le nom de l'activité doit comporter au moins 3 caractères.")
		.required("Le nom de l'activité est requis"),
	categorie_activite_id: yup
		.string("Entre votre catégorie d'activité")
		.min(1, "Le catégorie de l'activité est invalide.")
		.required("Le catégorie de l'activité est requis"),
});
