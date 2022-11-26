import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminForm from "../../components/Admin/Form";
import useAdminForm from "../../hooks/useAdminForm";
import { appendAdmin } from "../../redux/adminSlice";
import { addAdmin } from "../../services/admin";

const AdminAdd = () => {
  const [values, onChange] = useAdminForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addAdmin(values);
      dispatch(appendAdmin(response.data));
      navigate("/admins");
    } catch (errors) {
      console.error(errors);
    }
  };

  return (
    <AdminForm
      title="Ajouter un administrateur"
      values={values}
      button="Ajouter"
      create={true}
      handleSubmit={handleSubmit}
      onChange={onChange}
    />
  );
};

export default AdminAdd;
