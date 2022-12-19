import * as yup from "yup";

export const pavillonValidationSchema = yup.object({
	numero: yup
		.string("Entrer le numéro du pavillon")
		.required("Le numéro du pavillon est requis"),
});
