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
import {
	bulkUpdateTransaction,
	getTransactions,
} from "../../../services/transaction";
import DataTable from "../../DataTable";
import "./index.css";

const TransactionList = () => {
	const [checkboxSelection, setCheckboxSelection] = useState(false);
	const [selectionModel, setSelectionModel] = useState([]);
	const [transactions, setTransactions] = useTransaction();
	const dispatch = useDispatch();

	const setData = async() => {
		const response = await getTransactions(checkboxSelection);
		setTransactions(response.data);
	}

	const onChange = async () => {
		setCheckboxSelection(!checkboxSelection);
		await setData();
	};

	const handleValidate = async () => {
		const response = await bulkUpdateTransaction({ ids: selectionModel });
		dispatch(setTransactions(response.data));
		await setData();
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
				<DataTable
					rows={transactions}
					columns={columnsTransaction}
					checkboxSelection={checkboxSelection}
					onSelectionModelChange={(newSelectionModel) => {
						setSelectionModel(newSelectionModel);
					}}
					selectionModel={selectionModel}
				/>
			</div>
		</>
	);
};

export default TransactionList;
