import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivites } from "../redux/activiteSlice";
import { getActivites } from "../services/activites";

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
		if (activites.length <= 0) {
			fetch_data();
		}
	}, [activites.length, dispatch]);

	const setData = (data) => {
		dispatch(setActivites(data));
	};

	return [activites, setData];
};
export const useActiviteForm = (data) => {
	const [values, setValues] = useState({
		nom: data?.nom,
		categorie_activite_id: data.categorie_activite.id
	});

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return [values, onChange];
};

export default useActivite;
