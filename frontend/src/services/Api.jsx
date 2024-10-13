import axios from "axios";

const Api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json",
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const inscription = async (formData) => {
  const response = await Api.post("blogposts/", formData);
  return response.data;
};

export default Api;
