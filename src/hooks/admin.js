import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdmins } from "../redux/adminSlice";
import { getAdmins } from "../services/admin";

const useAdmin = () => {
	const dispatch = useDispatch();
	const admins = useSelector((state) => state.admin.admins);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getAdmins();
				dispatch(setAdmins(response.data));
			} catch (errors) {
				console.error(errors);
			}
		};
		fetch_data();
	}, [dispatch]);

	const setData = (data) => {
		dispatch(setAdmins(data));
	};

	return [admins, setData];
};

export const useAdminForm = (args) => {
	const formik = useFormik({
		initialValues: {
			nom: args.utilisateur?.nom,
			prenom: args.utilisateur?.prenom,
			adresse: args.utilisateur?.adresse,
			email: args.utilisateur?.email,
			contact: args.utilisateur?.contact,
			est_admin: args.utilisateur?.est_admin || false,
			mot_de_passe: "",
		},
		validationSchema: args.validationSchema,
		onSubmit: async (values) => {
			await args.onSubmit(values);
		},
	});

	return formik;
};

export const useAdminEditForm = (args) => {
	const formik = useFormik({
		initialValues: {
			nom: args.utilisateur?.nom,
			prenom: args.utilisateur?.prenom,
			adresse: args.utilisateur?.adresse,
			email: args.utilisateur?.email,
			contact: args.utilisateur?.contact,
			est_admin: args.utilisateur?.est_admin || false,
		},
		validationSchema: args.validationSchema,
		onSubmit: async (values) => {
			await args.onSubmit(values);
		},
	});

	return formik;
};

export default useAdmin;
