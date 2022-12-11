import { createSlice } from "@reduxjs/toolkit";

const statsSlice = createSlice({
	name: "stats",
	initialState: {
		stats: null,
	},
	reducers: {
		setStats: (state, action) => {
			state.stats = action.payload;
		},
	},
});

export const statsReducer = statsSlice.reducer;

export const { setStats } = statsSlice.actions;
