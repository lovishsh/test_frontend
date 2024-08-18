import axios from "axios";

export const login = async (formData) => {
  let subDomain = window.location.origin.split("//")[1]; // Removes the protocol (https:// or http://)
  subDomain = subDomain.split(".")[0]; // Gets the subdomain part

  const response = await axios.post(
    "http://localhost:4000/auth/login",
    {
      companyName: subDomain,
      email: formData.email,
      password: formData.password,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const tenantDetails = async () => {
  const response = await axios.get("http://localhost:4000/auth/fetch", {
    withCredentials: true,
  });
  return response.data;
};
export const logout = async () => {
  const response = await axios.delete("http://localhost:4000/auth/logout", {
    withCredentials: true,
  });
  return response.data;
};
