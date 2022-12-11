import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdmins } from "../redux/adminSlice";
import { getAdmins } from "../services/admin";

const useAdmin = () => {
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.admin.admins);
  
  const fetch_data = async () => {
    try {
      const response = await getAdmins();
      dispatch(setAdmins(response.data));
    } catch (errors) {
      console.error(errors);
    }
  };

  useEffect(() => {
    if (admins.length <= 0) {
      fetch_data();
    }
  }, []);

  const setData = (data) => {
    dispatch(setAdmins(data));
  };

  return [admins, setData];
};


export const useAdminForm = (data) => {
  const [values, setValues] = useState({
    nom: data?.nom,
    prenom: data?.prenom,
    adresse: data?.adresse,
    email: data?.email,
    contact: data?.contact,
    est_admin: data?.est_admin,
    mot_de_passe: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, onChange];
};

export default useAdmin;
