import http from "../helpers/http-common";

const addNotice = () => {
  return http.post(`notice/add`);
};

const getAllNotice = () => {
  return http.get(`/notice/`);
};
const getNoticeById = (id) => {
  return http.get(`/notice/${id}`);
};

const updateNotice = (id, data) => {
  return http.patch(`/notice/${id}`, data);
};

const removeNotice = (id) => {
  return http.delete(`/notice/${id}`);
};

const noticeService = {
  addNotice,
  getAllNotice,
  getNoticeById,
  updateNotice,
  removeNotice,
};

export default noticeService;
