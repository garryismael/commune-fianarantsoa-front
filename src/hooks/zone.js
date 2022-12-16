import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setZones } from "../redux/zoneSlice";
import { getZones } from "../services/zone";

const useZone = () => {
	const dispatch = useDispatch();
	const zones = useSelector((state) => state.zone.zones);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getZones();
				dispatch(setZones(response.data));
			} catch (errors) {
				console.error(errors);
			}
		};

		if (zones.length <= 0) {
			fetch_data();
		}
	}, [dispatch, zones.length]);

	const setData = (data) => {
		dispatch(setZones(data));
	};

	return [zones, setData];
};
export const useZoneForm = (data) => {
	const [values, setValues] = useState({
		nom: data?.nom,
		
	});

	const onChange = (e) => {
		setValues({...values, [e.target.name]: e.target.value });
	};

	return [values, onChange];
};


export default useZone;
