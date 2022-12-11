import axios from "../utils/axios";

export const getStats = async () => {
	return await axios.get("stats");
};
