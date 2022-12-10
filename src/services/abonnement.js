import axios from "../utils/axios";

export const getAbonnements = async () => {
  return await axios.get("abonnements");
};