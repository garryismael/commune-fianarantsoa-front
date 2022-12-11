import { createSlice } from "@reduxjs/toolkit";

const typeInstallationSlice = createSlice({
	name: "type_installations",
	initialState: {
		type_installations: [],
	},
	reducers: {
		setTypeInstallations: (state, action) => {
			state.type_installations = action.payload;
		},
		appendTypeInstallation: (state, action) => {
			state.type_installations.push(action.payload);
		},
		removeTypeInstallation: (state, action) => {
			state.type_installations = state.type_installations.filter(
				(type_installation) => type_installation.id !== action.payload,
			);
		},
		updateTypeInstallation: (state, action) => {
			state.type_installations = state.type_installations.map(
				(type_installation) => {
					if (type_installation.id === action.payload.id) {
						return action.payload;
					}
					return type_installation;
				},
			);
		},
	},
});

export const typeInstallationReducer = typeInstallationSlice.reducer;

export const {
	setTypeInstallations,
	appendTypeInstallation,
	removeTypeInstallation,
	updateTypeInstallation,
} = typeInstallationSlice.actions;
