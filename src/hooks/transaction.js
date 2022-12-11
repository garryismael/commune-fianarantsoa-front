import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTransactions } from "../redux/transactionSlice";
import { getTransactions } from "../services/transaction";

const useTransaction = () => {
	const dispatch = useDispatch();
	const transactions = useSelector((state) => state.transaction.transactions);

	const fetch_data = async () => {
		try {
			const response = await getTransactions();
			dispatch(setTransactions(response.data));
		} catch (errors) {
			console.error(errors);
		}
	};

	useEffect(() => {
		if (transactions.length <= 0) {
			fetch_data();
		}
	}, []);

	const setData = (data) => {
		dispatch(setTransactions(data));
	};

	return [transactions, setData];
};

export default useTransaction;
