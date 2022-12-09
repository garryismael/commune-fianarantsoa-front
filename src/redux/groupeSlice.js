import { createSlice } from "@reduxjs/toolkit";

const groupeSlice = createSlice({
	name: "groupes",
	initialState: {
		groupes: [],
	},
	reducers: {
		setGroupes: (state, action) => {
			state.groupes = action.payload;
		},
		appendGroupe: (state, action) => {
			state.groupes.push(action.payload);
		},
		removeGroupe: (state, action) => {
			state.groupes = state.groupes.filter(
				(groupe) => groupe.id !== action.payload,
			);
		},
		updateGroupe: (state, action) => {
			state.groupes = state.groupes.map((groupe) => {
				if (groupe.id === action.payload.id) {
					return action.payload;
				}
				return groupe;
			});
		},
	},
});

export const groupeReducer = groupeSlice.reducer;

export const { setGroupes, appendGroupe, removeGroupe, updateGroupe } =
	groupeSlice.actions;
