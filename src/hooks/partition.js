import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPartitions } from "../redux/partitionSlice";
import { getPartitions } from "../services/partition";

const usePartition = () => {
	const dispatch = useDispatch();
	const partitions = useSelector((state) => state.partition.partitions);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getPartitions();
				dispatch(setPartitions(response.data));
			} catch (errors) {
				console.error(errors);
			}
		};
		if (partitions.length <= 0) {
			fetch_data();
		}
	}, [dispatch, partitions.length]);

	const setData = (data) => {
		dispatch(setPartitions(data));
	};

	return [partitions, setData];
};

export default usePartition;
