import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivites } from "../redux/activiteSlice";
import { getActivites } from "../services/activite";

const useActivite = () => {
  const dispatch = useDispatch();
  const activites = useSelector((state) => state.activite.activites);
  
  const fetch_data = async () => {
    try {
      const response = await getActivites();
      dispatch(setActivites(response.data));
    } catch (errors) {
      console.error(errors);
    }
  };

  useEffect(() => {
    if (activites.length <= 0) {
      fetch_data();
    }
  }, []);

  const setData = (data) => {
    dispatch(setActivites(data));
  };

  return [activites, setData];
};


export default useActivite;
