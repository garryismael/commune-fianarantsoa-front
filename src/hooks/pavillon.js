import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPavillons } from "../redux/pavillonSlice";
import { getNotUsedPavillon, getPavillons } from "../services/pavillons";
import { useFormik } from "formik";
import { pavillonValidationSchema } from "../validations/pavillon-form";

const usePavillon = () => {
	const dispatch = useDispatch();
	const pavillons = useSelector((state) => state.pavillon.pavillons);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getPavillons();
				dispatch(setPavillons(response.data));
			} catch (errors) {
				console.error(errors);
			}
		};
		fetch_data();
	}, [dispatch, pavillons.length]);

	const setData = (data) => {
		dispatch(setPavillons(data));
	};

	return [pavillons, setData];
};
export const usePavillonForm = (args) => {
	const formik = useFormik({
		initialValues: {
			numero: args.pavillon?.numero,
		},
		validationSchema: pavillonValidationSchema,
		onSubmit: async (values) => {
			await args.onSubmit(values);
		},
	});

	return formik;
};

export const useNotUsedPavillon = () => {
	const [pavillons, setPavillons] = useState([]);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getNotUsedPavillon();
				setPavillons(response.data);
			} catch (errors) {
				console.error(errors);
			}
		};
		fetch_data();
	}, []);
	return [pavillons, setPavillons];
};

export default usePavillon;
