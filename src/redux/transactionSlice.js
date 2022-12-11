import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
	name: "transactions",
	initialState: {
		transactions: [],
	},
	reducers: {
		setTransactions: (state, action) => {
			state.transactions = action.payload;
		},
		appendTransaction: (state, action) => {
			state.transactions.push(action.payload);
		},
		removeTransaction: (state, action) => {
			state.transactions = state.transactions.filter(
				(transaction) => transaction.id !== action.payload,
			);
		},
		updateTransaction: (state, action) => {
			state.transactions = state.transactions.map((transaction) => {
				if (transaction.id === action.payload.id) {
					return action.payload;
				}
				return transaction;
			});
		},
	},
});

export const transactionReducer = transactionSlice.reducer;

export const {
	setTransactions,
	appendTransaction,
	removeTransaction,
	updateTransaction,
} = transactionSlice.actions;
