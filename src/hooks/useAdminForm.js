import { useState } from "react";

const useAdminForm = () => {
  const [values, setValues] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    contact: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, onChange];
};

export default useAdminForm;
