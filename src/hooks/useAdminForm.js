import { useState } from "react";

const useAdminForm = (data) => {
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

export default useAdminForm;
