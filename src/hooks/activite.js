import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivites } from "../redux/activiteSlice";
import { getActivites } from "../services/activites";
import { activiteValidationSchema } from "../validations/activite-form";

const useActivite = () => {
	const dispatch = useDispatch();
	const activites = useSelector((state) => state.activite.activites);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getActivites();
				dispatch(setActivites(response.data));
			} catch (errors) {
				console.error(errors);
			}
		};
		fetch_data();
	}, [dispatch]);

	const setData = (data) => {
		dispatch(setActivites(data));
	};

	return [activites, setData];
};
export const useActiviteForm = (args) => {
	const formik = useFormik({
		initialValues: {
			nom: args.activite?.nom || "",
			categorie_activite_id: args.activite?.categorie_activite.id || "",
		},
		validationSchema: activiteValidationSchema,
		onSubmit: async (values) => {
			await args.onSubmit(values);
		},
	});

	console.log(args.activite);

	return formik;
};

export default useActivite;
