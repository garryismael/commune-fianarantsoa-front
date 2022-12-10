import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAbonnements } from "../redux/abonnementSlice";
import { getAbonnements } from "../services/abonnement";

const useAbonnement = () => {
  const dispatch = useDispatch();
  const abonnements = useSelector((state) => state.abonnement.abonnements);
  
  const fetch_data = async () => {
    try {
      const response = await getAbonnements();
      dispatch(setAbonnements(response.data));
    } catch (errors) {
      console.error(errors);
    }
  };

  useEffect(() => {
    if (abonnements.length <= 0) {
      fetch_data();
    }
  }, []);

  const setData = (data) => {
    dispatch(setAbonnements(data));
  };

  return [abonnements, setData];
};


export default useAbonnement;
