import { createSlice } from "@reduxjs/toolkit";

const partitionSlice = createSlice({
	name: "partitions",
	initialState: {
		partitions: [],
	},
	reducers: {
		setPartitions: (state, action) => {
			state.partitions = action.payload;
		},
		appendPartition: (state, action) => {
			state.partitions.push(action.payload);
		},
		removePartition: (state, action) => {
			state.partitions = state.partitions.filter(
				(partition) => partition.id !== action.payload,
			);
		},
		updatePartition: (state, action) => {
			state.partitions = state.partitions.map((partition) => {
				if (partition.id === action.payload.id) {
					return action.payload;
				}
				return partition;
			});
		},
	},
});

export const partitionReducer = partitionSlice.reducer;

export const { setPartitions, appendPartition, removePartition, updatePartition } =
	partitionSlice.actions;
