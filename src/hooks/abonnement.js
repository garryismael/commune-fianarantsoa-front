import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAbonnements } from "../redux/abonnementSlice";
import { getAbonnements } from "../services/abonnement";

const useAbonnement = () => {
	const dispatch = useDispatch();
	const abonnements = useSelector((state) => state.abonnement.abonnements);

	const fetch_data = async () => {
		try {
			const response = await getAbonnements();
			dispatch(setAbonnements(response.data));
		} catch (errors) {
			console.error(errors);
		}
	};

	useEffect(() => {
		if (abonnements.length <= 0) {
			fetch_data();
		}
	}, []);

	const setData = (data) => {
		dispatch(setAbonnements(data));
	};

	return [abonnements, setData];
};

export const useAbonnementForm = (abonnement) => {
	const [values, setValues] = useState({
		frais: abonnement?.frais,
		mois_a_payer: abonnement?.mois_a_payer,
		client_id: abonnement?.client.id,
		activite_id: abonnement?.activite.id,
		zone_id: abonnement?.zone.id,
		partition_id: abonnement?.partition.id,
		type_installation_id: abonnement?.type_installation.id,
		pavillon_id: abonnement?.pavillon.id,
	});

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, onChange];
};

export default useAbonnement;
