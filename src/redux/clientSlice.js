import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
	name: "clients",
	initialState: {
		clients: [],
	},
	reducers: {
		setClients: (state, action) => {
			state.clients = action.payload;
		},
		appendClient: (state, action) => {
			state.clients.push(action.payload);
		},
		removeClient: (state, action) => {
			state.clients = state.clients.filter(
				(client) => client.id !== action.payload,
			);
		},
		updateClient: (state, action) => {
			state.clients = state.clients.map((client) => {
				if (client.id === action.payload.id) {
					return action.payload;
				}
				return client;
			});
		},
	},
});

export const clientReducer = clientSlice.reducer;

export const { setClients, appendClient, removeClient, updateClient } =
	clientSlice.actions;
