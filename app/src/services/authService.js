import http from "../helpers/http-common";

const getSession = () => {
  return http.get(`/get-session`);
};

const getAllUsers = () => {
  return http.get(`/users/`);
};

const register = (data) => {
  return http.post(`/users/register`, data);
};

const login = (data) => {
  return http.post(`/users/login`, data);
};

const getProfile = (id) => {
  return http.get(`/profile/${id}`);
};
const getUserByRole = (role) => {
  return http.get(`/users/${role}`);
};
const logout = () => {
  return http.get(`/users/logout`);
};

const AuthService = {
  register,
  login,
  logout,
  getSession,
  getProfile,
  getAllUsers,
  getUserByRole,
};

export default AuthService;
