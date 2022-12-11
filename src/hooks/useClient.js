import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClients } from "../redux/clientSlice";
import { getClientAbonnements, getClients } from "../services/client";

const useClient = () => {
	const dispatch = useDispatch();
	const clients = useSelector((state) => state.client.clients);

	const fetch_data = async () => {
		try {
			const response = await getClients();
			dispatch(setClients(response.data));
		} catch (errors) {
			console.error(errors);
		}
	};

	useEffect(() => {
		if (clients.length <= 0) {
			fetch_data();
		}
	}, []);

	const setData = (data) => {
		dispatch(setClients(data));
	};

	return [clients, setData];
};

export const useClientAbonnement = (id) => {
	const [abonnements, setAbonnements] = useState([]);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getClientAbonnements(id);
				setAbonnements(response.data);
			} catch (errors) {
				console.error(errors);
			}
		};
		fetch_data();
	}, [id]);

	return [abonnements, setAbonnements];
};

export const useClientForm = (data) => {
	const [values, setValues] = useState({
		nom: data?.nom,
		prenom: data?.prenom,
		adresse: data?.adresse,
		contact: data?.contact,
	});

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return [values, onChange];
};

export default useClient;
