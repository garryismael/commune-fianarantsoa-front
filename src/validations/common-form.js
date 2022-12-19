import * as yup from "yup";

export const getValidationSchema = (form) => {
	return yup.object({
		nom: yup.string(form.str).min(3, form.min).required(form.required),
	});
};
