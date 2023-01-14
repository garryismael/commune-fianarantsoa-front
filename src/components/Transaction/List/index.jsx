import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { columnsTransaction } from "../../../constants/table";
import useTransaction from "../../../hooks/transaction";
import { setTransactions } from "../../../redux/transactionSlice";
import { bulkUpdateTransaction, getTransactions } from "../../../services/transaction";
import DataTable from "../../DataTable";
import "./index.css";

const TransactionList = () => {
	const [checkboxSelection, setCheckboxSelection] = useState(false);
	const [ids, setIds] = useState([]);
	const [transactions, setData] = useTransaction();
	const dispatch = useDispatch();

	const onChange = async () => {
		setCheckboxSelection(!checkboxSelection);
		const response = await getTransactions(checkboxSelection);
		setData(response.data);
	};

	const handleCheck = (e) => {
		if (e.target.checked) {
			setIds((values) => values.concat(e.target.value));
		} else {
			setIds((values) =>
				values.filter((value) => value !== e.target.value),
			);
		}
	};

	const handleValidate = async () => {
		const response = await bulkUpdateTransaction({ ids });
		dispatch(setTransactions(response.data));
	};

	return (
		<>
			<div>
				<div className='transaction-btn'>
					<FormControl size='small'>
						<InputLabel id='status-label'>Status</InputLabel>
						<Select
							id='status'
							labelId='status-label'
							value={checkboxSelection}
							autoWidth
							onChange={onChange}
							label='Status'>
							<MenuItem value={true}>en cours</MenuItem>
							<MenuItem value={false}>vérifié</MenuItem>
						</Select>
					</FormControl>

					{checkboxSelection ? (
						<Button
							variant='contained'
							type='button'
							onClick={handleValidate}>
							Valider
						</Button>
					) : null}
				</div>
				<DataTable rows={transactions} columns={columnsTransaction} checkboxSelection={checkboxSelection}/>
			</div>
		</>
	);
};

export default TransactionList;
