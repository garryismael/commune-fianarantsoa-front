import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAbonnements } from "../redux/abonnementSlice";
import { getAbonnements } from "../services/abonnement";
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

export const useAbonnementClientForm = (args) => {
	const formik = useFormik({
		initialValues: {
			frais: args.abonnement?.frais || "",
			mois_a_payer: args.abonnement?.mois_a_payer || "",
			client_id: args.client?.id || "",
			activite_id: args.abonnement?.activite.id || "",
			zone_id: args.abonnement?.zone.id || "",
			partition_id: args.abonnement?.partition.id || "",
			type_installation_id: args.abonnement?.type_installation.id || "",
			pavillon_id: args.abonnement?.pavillon.id || "",
		},
		validationSchema: abonnementValidationSchema,
		onSubmit: async (values) => {
			await args.onSubmit(values);
		},
	});

	return formik;
};

export default useAbonnement;
