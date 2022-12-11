import { createSlice } from "@reduxjs/toolkit";

const pavillonSlice = createSlice({
	name: "pavillons",
	initialState: {
		pavillons: [],
	},
	reducers: {
		setPavillons: (state, action) => {
			state.pavillons = action.payload;
		},
		appendPavillon: (state, action) => {
			state.pavillons.push(action.payload);
		},
		removePavillon: (state, action) => {
			state.pavillons = state.pavillons.filter(
				(pavillon) => pavillon.id !== action.payload,
			);
		},
		updatePavillon: (state, action) => {
			state.pavillons = state.pavillons.map((pavillon) => {
				if (pavillon.id === action.payload.id) {
					return action.payload;
				}
				return pavillon;
			});
		},
	},
});

export const pavillonReducer = pavillonSlice.reducer;

export const { setPavillons, appendPavillon, removePavillon, updatePavillon } =
	pavillonSlice.actions;
