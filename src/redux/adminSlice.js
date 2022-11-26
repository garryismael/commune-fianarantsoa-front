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
		}
	},
});

export const adminReducer = adminSlice.reducer;

export const { setAdmins, appendAdmin } = adminSlice.actions;