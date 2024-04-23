import axios from "axios";
import { clearFromStorage } from "../utills/storage";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const handleRedirectLogin = () => {
  clearFromStorage();
  window.location.href = "/sign-in";
};

const requestHandler = async (request) => {
  const token = localStorage.getItem("token");

  request.headers["Authorization "] = ` Bearer ${token.access_token}`;

  return request;
};

const responseHandler = (response) => {
  return response.data;
};

const errorHandler = (error, isPublicAPI) => {
  if (!isPublicAPI && error.response?.status === 401) {
    handleRedirectLogin();
  }
  return Promise.reject(error);
};

API.interceptors.request.use(
  (request) => requestHandler(request, true),
  (error) => errorHandler(error, true)
);

API.interceptors.response.use(
  (response) => responseHandler(response, true),
  (error) => errorHandler(error, true)
);

export default API;
