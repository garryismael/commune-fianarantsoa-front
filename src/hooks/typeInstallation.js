import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTypeInstallations } from "../redux/typeInstallationSlice";
import { getTypeInstallation } from "../services/type_installation";

const useTypeInstallation = () => {
  const dispatch = useDispatch();
  const type_installations = useSelector((state) => state.type_installation.type_installations);
  
  const fetch_data = async () => {
    try {
      const response = await getTypeInstallation();
      dispatch(setTypeInstallations(response.data));
    } catch (errors) {
      console.error(errors);
    }
  };

  useEffect(() => {
    if (type_installations.length <= 0) {
      fetch_data();
    }
  }, []);

  const setData = (data) => {
    dispatch(setTypeInstallations(data));
  };

  return [type_installations, setData];
};


export default useTypeInstallation;
