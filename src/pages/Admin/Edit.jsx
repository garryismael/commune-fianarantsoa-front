import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AdminForm from "../../components/Admin/Form";
import useAdminForm from "../../hooks/useAdminForm";
import { updateAdmin } from "../../redux/adminSlice";
import { editAdmin } from "../../services/admin";

const AdminEdit = () => {
  const location = useLocation();
  const [values, onChange] = useAdminForm(location.state?.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editAdmin(location.state?.data.id, values);
      dispatch(updateAdmin(response.data));
      navigate("/admins");
    } catch (errors) {
      console.error(errors);
    }
  };

  return (
    <AdminForm
      title="Modifier un administrateur"
      values={values}
      button="Modifier"
      create={false}
      handleSubmit={handleSubmit}
      onChange={onChange}
    />
  );
};

export default AdminEdit;
