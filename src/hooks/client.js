import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClients } from "../redux/clientSlice";
import { getClientAbonnements, getClients } from "../services/client";
import { useFormik } from "formik";
import { clientValidationSchema } from "../validations/client-form";

const useClient = () => {
	const dispatch = useDispatch();
	const clients = useSelector((state) => state.client.clients);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getClients();
				dispatch(setClients(response.data));
			} catch (errors) {
				console.error(errors);
			}
		};
		fetch_data();
	}, [dispatch]);

	const setData = (data) => {
		dispatch(setClients(data));
	};

	return [clients, setData];
};

export const useClientAbonnement = (id) => {
	const [abonnements, setAbonnements] = useState([]);

	const reload = async () => {
		try {
			const response = await getClientAbonnements(id);
			setAbonnements(response.data);
		} catch (errors) {
			console.error(errors);
		}
	};

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

	return [abonnements, setAbonnements, reload];
};

export const useClientForm = (args) => {
	const formik = useFormik({
		initialValues: {
			nom: args.client?.nom || "",
			prenom: args.client?.prenom || "",
			adresse: args.client?.adresse || "",
			contact: args.client?.contact || "",
		},
		validationSchema: clientValidationSchema,
		onSubmit: (values) => {
			args.onSubmit(values);
		},
	});

	return formik;
};

export default useClient;
