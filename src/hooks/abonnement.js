import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAbonnements } from "../redux/abonnementSlice";
import { getAbonnements } from "../services/abonnement";
import { useFormik } from "formik";
import { abonnementValidationSchema } from "../validations/abonnement-form";

const useAbonnement = () => {
	const dispatch = useDispatch();
	const abonnements = useSelector((state) => state.abonnement.abonnements);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getAbonnements();
				dispatch(setAbonnements(response.data));
			} catch (errors) {
				console.error(errors);
			}
		};
		fetch_data();
	}, [dispatch]);

	const setData = (data) => {
		dispatch(setAbonnements(data));
	};

	return [abonnements, setData];
};

export const useAbonnementForm = (args) => {
	const formik = useFormik({
		initialValues: {
			frais: args.abonnement?.frais || "",
			mois_a_payer: args.abonnement?.mois_a_payer || "",
			client_id: args.abonnement?.client.id || "",
			activite_id: args.abonnement?.activite.id || "",
			zone_id: args.abonnement?.zone.id || "",
			partition_id: args.abonnement?.partition.id || "",
			type_installation_id: args.abonnement?.type_installation.id || "",
			pavillon_id: args.abonnement?.pavillon.id || "",
		},
		validationSchema: abonnementValidationSchema,
		onSubmit: (values) => {
			args.onSubmit(values);
		},
	});

	return formik;
};

export const useAbonnementClientForm = (client, abonnement) => {
	const [values, setValues] = useState({
		frais: abonnement?.frais,
		mois_a_payer: abonnement?.mois_a_payer,
		client_id: client?.id,
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
