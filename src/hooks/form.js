import { useFormik } from "formik";

export const useForm = (args) => {
	const formik = useFormik({
		initialValues: {
			nom: args.data?.nom,
		},
		validationSchema: args.validationSchema,
		onSubmit: async (values) => {
			await args.onSubmit(values);
		},
	});

	return formik;
};

export default useForm;
