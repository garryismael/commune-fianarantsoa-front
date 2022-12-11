import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPavillons } from "../redux/pavillonSlice";
import { getPavillons } from "../services/pavillons";

const usePavillon = () => {
  const dispatch = useDispatch();
  const pavillons = useSelector((state) => state.pavillon.pavillons);
  
  const fetch_data = async () => {
    try {
      const response = await getPavillons();
      dispatch(setPavillons(response.data));
    } catch (errors) {
      console.error(errors);
    }
  };

  useEffect(() => {
    if (pavillons.length <= 0) {
      fetch_data();
    }
  }, []);

  const setData = (data) => {
    dispatch(setPavillons(data));
  };

  return [pavillons, setData];
};


export default usePavillon;
