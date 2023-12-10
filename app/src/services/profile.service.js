import http from "../helpers/http-common";

const getProfileByID = (id) => {
  return http.get(`/profile/${id}`);
};

const getAllProfiles = () => {
  return http.get(`/profile`);
};

const updateProfile = (id, data) => {
  return http.patch(`/profile/${id}`, data);
};

const deleteProfileByID = (id) => {
  return http.delete(`/profile/${id}`);
};

const ProfileService = {
  getAllProfiles,
  getProfileByID,
  updateProfile,
  deleteProfileByID,
};

export default ProfileService;
