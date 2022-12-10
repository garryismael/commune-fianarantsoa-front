import { createSlice } from '@reduxjs/toolkit';

const abonnementSlice = createSlice({
	name: 'abonnements',
	initialState: {
		abonnements: [],
	},
	reducers: {
		setAbonnements: (state, action) => {
			state.abonnements = action.payload;
		},
		appendAbonnement: (state, action) => {
			state.abonnements.push(action.payload);
		},
		removeAbonnement: (state, action) => {
			state.abonnements = state.abonnements.filter(abonnement => abonnement.id !== action.payload);
		},
		updateAbonnement: (state, action) => {
			state.abonnements = state.abonnements.map((abonnement) => {
				if (abonnement.id === action.payload.id) {
					return action.payload
				}
				return abonnement;
			})
		}
	},
});

export const abonnementReducer = abonnementSlice.reducer;

export const { setAbonnements, appendAbonnement, removeAbonnement, updateAbonnement } = abonnementSlice.actions;