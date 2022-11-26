import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdmins } from "../redux/adminSlice";
import { getAdmins } from "../services/admin";

const useAdmin = () => {
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.admin.admins);
  useEffect(() => {
    const fetch_data = async () => {
      try {
        const response = await getAdmins();
        dispatch(setAdmins(response.data));
      } catch (errors) {
        throw new Error(errors);
      }
    };
    if (admins.length <= 0) {
      fetch_data();
    }
  }, []);

  const setData = (data) => {
    dispatch(setAdmins(data));
  };

  return [admins, setData];
};

export default useAdmin;
