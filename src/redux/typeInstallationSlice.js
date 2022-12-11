import { createSlice } from "@reduxjs/toolkit";

const typeInstallationSlice = createSlice({
	name: "types_installation",
	initialState: {
		types_installation: [],
	},
	reducers: {
		setTypeInstallations: (state, action) => {
			state.types_installation = action.payload;
		},
		appendTypeInstallation: (state, action) => {
			state.types_installation.push(action.payload);
		},
		removeTypeInstallation: (state, action) => {
			state.types_installation = state.types_installation.filter(
				(type_installation) => type_installation.id !== action.payload,
			);
		},
		updateTypeInstallation: (state, action) => {
			state.types_installation = state.types_installation.map(
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
