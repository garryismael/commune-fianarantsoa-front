import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";
import { useState } from "react";
import { columnsTransaction } from "../../../constants/table";
import useTransaction from "../../../hooks/transaction";
import {
	bulkUpdateTransaction,
	getTransactions,
} from "../../../services/transaction";
import DataTable from "../../DataTable";
import "./index.css";

const TransactionList = () => {
	const [estVerifie, setEstVerifie] = useState(false);
	const [selectionModel, setSelectionModel] = useState([]);
	const [transactions, setData] = useTransaction();

	const updateData = async (value) => {
		const response = await getTransactions(value);
		setData(response.data);
	};

	const onChange = async (e) => {
		const value = e.target.value;
		await updateData(value);
		setEstVerifie(value);
	};

	const handleValidate = async () => {
		const response = await bulkUpdateTransaction(
			{ ids: selectionModel },
			estVerifie,
		);
		setData(response.data);
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
							value={estVerifie}
							autoWidth
							onChange={onChange}
							label='Status'>
							<MenuItem value={false}>en cours</MenuItem>
							<MenuItem value={true}>vérifié</MenuItem>
						</Select>
					</FormControl>

					{!estVerifie && transactions.length > 0 ? (
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
					checkboxSelection={!estVerifie && transactions.length > 0}
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
