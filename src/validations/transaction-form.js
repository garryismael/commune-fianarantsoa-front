import * as yup from "yup";

export const transactionAbonnementValidationSchema = yup.object({
	total_mois: yup
		.number("Entrer le mois total")
		.min(1, "Ce champ doit avoir une valeur supérieure à zéro.")
		.required("Ce champ est requis")
});
