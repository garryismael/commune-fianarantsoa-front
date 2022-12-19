import * as yup from "yup";

export const clientValidationSchema = yup.object({
	nom: yup
		.string("Entrer votre nom")
		.min(3, "Ce champ doit comporter au moins 3 caractères.")
		.required("Le nom est requis"),
	prenom: yup
		.string("Entrer votre prénom")
		.min(3, "Ce champ doit comporter au moins 3 caractères.")
		.required("Le prenom est requis"),
	email: yup
		.string("Entrer votre adresse email")
		.email("Adresse email invalide")
		.required("L'adresse email est requis"),
	adresse: yup
		.string("Entre votre adresse")
		.min(3, "Ce champ doit comporter au moins 3 caractères.")
		.required("L'adresse est requis"),
	contact: yup
		.string("Entre votre contact")
		.min(3, "Ce champ doit comporter au moins 3 caractères.")
		.required("Le contact est requis"),
	est_admin: yup
		.boolean("Veuillez choisir une valeur")
		.required("Est admin est requis"),
	mot_de_passe: yup
		.string("Entrer un mot de passe")
		.min(4, "Ce champ doit comporter au moins 3 caractères.")
		.required("Le mot de passe est requis"),
});
