import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setZones } from "../redux/zoneSlice";
import { getZones } from "../services/zone";

const useZone = () => {
  const dispatch = useDispatch();
  const zones = useSelector((state) => state.zone.zones);
  
  const fetch_data = async () => {
    try {
      const response = await getZones();
      dispatch(setZones(response.data));
    } catch (errors) {
      console.error(errors);
    }
  };

  useEffect(() => {
    if (zones.length <= 0) {
      fetch_data();
    }
  }, []);

  const setData = (data) => {
    dispatch(setZones(data));
  };

  return [zones, setData];
};


export default useZone;
