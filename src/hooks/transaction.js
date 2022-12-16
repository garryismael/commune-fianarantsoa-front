import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTransactions } from "../redux/transactionSlice";
import { getTransactions } from "../services/transaction";

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

		if (transactions.length <= 0) {
			fetch_data();
		}
	}, [dispatch, transactions.length]);

	const setData = (data) => {
		dispatch(setTransactions(data));
	};

	return [transactions, setData];
};

export const useTransactionForm = () => {
	const [values, setValues] = useState({
		total_mois: 0,
		abonnement_id: undefined,
	});

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return [values, onChange];
};

export default useTransaction;
