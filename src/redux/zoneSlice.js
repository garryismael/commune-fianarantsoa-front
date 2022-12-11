import { createSlice } from "@reduxjs/toolkit";

const zoneSlice = createSlice({
	name: "pavillons",
	initialState: {
		zones: [],
	},
	reducers: {
		setZones: (state, action) => {
			state.zones = action.payload;
		},
		appendZone: (state, action) => {
			state.zones.push(action.payload);
		},
		removeZone: (state, action) => {
			state.zones = state.zones.filter(
				(zone) => zone.id !== action.payload,
			);
		},
		updateZone: (state, action) => {
			state.zones = state.zones.map((zone) => {
				if (zone.id === action.payload.id) {
					return action.payload;
				}
				return zone;
			});
		},
	},
});

export const zoneReducer = zoneSlice.reducer;

export const { setZones, appendZone, removeZone, updateZone } =
	zoneSlice.actions;
