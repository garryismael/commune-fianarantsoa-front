import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStats } from "../redux/statsSlice";
import { getStats } from "../services/stats";

const useStats = () => {
	const dispatch = useDispatch();
	const stats = useSelector((state) => state.stats.stats);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getStats();
				dispatch(setStats(response.data));
			} catch (errors) {
				console.error(errors);
			}
		};
		fetch_data();
	}, [dispatch]);

	const setData = (data) => {
		dispatch(setStats(data));
	};

	return [stats, setData];
};

export default useStats;
