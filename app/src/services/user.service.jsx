import http from "../http-common";

class AuthService {
  getSession() {
    return http.get(`/get-session`);
  }

  register(data) {
    return http.post(`/users/register", data`);
  }
  login(data) {
    return http.post(`/users/login", data`);
  }
  logout() {
    return http.get(`/logout`);
  }
}

export default AuthService();
