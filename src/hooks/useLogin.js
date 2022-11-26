import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/authSlice";
import { login } from "../services/auth";
import { setHeader } from "../utils/axios";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      let response = await login(email, password);
      setHeader(response);
      dispatch(setUser(response.data.utilisateur));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return [setEmail, setPassword, loginUser];
};

export default useLogin;
