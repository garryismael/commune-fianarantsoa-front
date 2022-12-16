import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategorieActivite } from "../redux/categorieActiviteSlice";
import { getCategorieActivites } from "../services/categorieActivite";

const useCategorieActivite = () => {
	const dispatch = useDispatch();
	const categorie_activite = useSelector(
		(state) => state.categorie_activite.categories_activite,
	);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getCategorieActivites();
				dispatch(setCategorieActivite(response.data));
			} catch (errors) {
				console.error(errors);
			}
		};

		if (categorie_activite.length <= 0) {
			fetch_data();
		}
	}, [categorie_activite.length, dispatch]);

	const setData = (data) => {
		dispatch(setCategorieActivite(data));
	};

	return [categorie_activite, setData];
};
export const useCategorieActiviteForm = (data) => {
	const [values, setValues] = useState({
		nom: data?.nom,
	});

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return [values, onChange];
};

export default useCategorieActivite;
