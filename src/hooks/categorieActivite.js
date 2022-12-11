import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategorieActivite } from "../redux/categorieActiviteSlice";
import { getCategorieActivites } from "../services/categorie_activite";

const useZone = () => {
  const dispatch = useDispatch();
  const categorie_activite = useSelector((state) => state.categorie_activite.categories_activite);
  
  const fetch_data = async () => {
    try {
      const response = await getCategorieActivites();
      dispatch(setCategorieActivite(response.data));
    } catch (errors) {
      console.error(errors);
    }
  };

  useEffect(() => {
    if (categorie_activite.length <= 0) {
      fetch_data();
    }
  }, []);

  const setData = (data) => {
    dispatch(setCategorieActivite(data));
  };

  return [categorie_activite, setData];
};


export default useZone;
