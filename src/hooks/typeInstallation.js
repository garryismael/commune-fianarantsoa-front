import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTypeInstallations } from "../redux/typeInstallationSlice";
import { getTypeInstallation } from "../services/typeInstallation";

const useTypeInstallation = () => {
	const dispatch = useDispatch();
	const types_installation = useSelector(
		(state) => state.type_installation.types_installation,
	);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getTypeInstallation();
				dispatch(setTypeInstallations(response.data));
			} catch (errors) {
				console.error(errors);
			}
		};
		fetch_data();
	}, [dispatch]);

	const setData = (data) => {
		dispatch(setTypeInstallations(data));
	};

	return [types_installation, setData];
};

export default useTypeInstallation;
