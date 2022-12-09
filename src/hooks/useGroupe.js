import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGroupes } from "../redux/groupeSlice";
import { getGroupes } from "../services/groupe";

const useGroupe = () => {
  const dispatch = useDispatch();
  const groupes = useSelector((state) => state.groupe.groupes);
  
  const fetch_data = async () => {
    try {
      const response = await getGroupes();
      dispatch(setGroupes(response.data));
    } catch (errors) {
      console.error(errors);
    }
  };

  useEffect(() => {
    if (groupes.length <= 0) {
      fetch_data();
    }
  }, []);

  const setData = (data) => {
    dispatch(setGroupes(data));
  };

  return [groupes, setData];
};


export default useGroupe;
