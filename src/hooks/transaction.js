import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTransactions } from "../redux/transactionSlice";
import { getTransactions } from "../services/transaction";
import { transactionAbonnementValidationSchema } from "../validations/transaction-form";

const useTransaction = () => {
	const dispatch = useDispatch();
	const transactions = useSelector((state) => state.transaction.transactions);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getTransactions();
				dispatch(setTransactions(response.data));
			} catch (errors) {
				console.error(errors);
			}
		};
		fetch_data();
	}, [dispatch]);

	const setData = (data) => {
		dispatch(setTransactions(data));
	};

	return [transactions, setData];
};

export const useTransactionForm = (args) => {
	const formik = useFormik({
		initialValues: {
			total_mois: 0,
			abonnement_id: args.abonnement.id,
		},
		validationSchema: transactionAbonnementValidationSchema,
		onSubmit: async (values) => {
			await args.onSubmit(values);
		},
	});

	return formik;
};

export default useTransaction;
