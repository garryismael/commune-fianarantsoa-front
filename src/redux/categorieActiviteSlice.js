import { createSlice } from "@reduxjs/toolkit";

const categorieActiviteSlice = createSlice({
	name: "categories_activite",
	initialState: {
		categories_activite: [],
	},
	reducers: {
		setCategorieActivite: (state, action) => {
			state.categories_activite = action.payload;
		},
		appendCategorieActivite: (state, action) => {
			state.categories_activite.push(action.payload);
		},
		removeCategorieActivite: (state, action) => {
			state.categories_activite = state.categories_activite.filter(
				(categorieActivite) => categorieActivite.id !== action.payload,
			);
		},
		updateCategorieActivite: (state, action) => {
			state.categories_activite = state.categories_activite.map((categorieActivite) => {
				if (categorieActivite.id === action.payload.id) {
					return action.payload;
				}
				return categorieActivite;
			});
		},
	},
});

export const categorieActiviteReducer = categorieActiviteSlice.reducer;

export const { setCategorieActivite, appendCategorieActivite, removeCategorieActivite, updateCategorieActivite } =
	categorieActiviteSlice.actions;
