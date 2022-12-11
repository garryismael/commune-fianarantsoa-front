import { createSlice } from "@reduxjs/toolkit";

const activiteSlice = createSlice({
	name: "activites",
	initialState: {
		activites: [],
	},
	reducers: {
		setActivites: (state, action) => {
			state.activites = action.payload;
		},
		appendActivite: (state, action) => {
			state.activites.push(action.payload);
		},
		removeActivite: (state, action) => {
			state.activites = state.activites.filter(
				(activite) => activite.id !== action.payload,
			);
		},
		updateActivite: (state, action) => {
			state.activites = state.activites.map((activite) => {
				if (activite.id === action.payload.id) {
					return action.payload;
				}
				return activite;
			});
		},
	},
});

export const activiteReducer = activiteSlice.reducer;

export const { setActivites, appendActivite, removeActivite, updateActivite } =
	activiteSlice.actions;
