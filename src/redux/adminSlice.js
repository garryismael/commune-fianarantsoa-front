import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
	name: 'admins',
	initialState: {
		admins: [],
	},
	reducers: {
		setAdmins: (state, action) => {
			state.admins = action.payload;
		},
		appendAdmin: (state, action) => {
			state.admins.push(action.payload);
		},
		removeAdmin: (state, action) => {
			state.admins = state.admins.filter(admin => admin.id != action.payload);
		},
		updateAdmin: (state, action) => {
			state.admins = state.admins.map((admin) => {
				if (admin.id == action.payload.id) {
					return action.payload
				}
				return admin;
			})
		}
	},
});

export const adminReducer = adminSlice.reducer;

export const { setAdmins, appendAdmin, removeAdmin, updateAdmin } = adminSlice.actions;