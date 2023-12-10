import AuthService from "../services/authService.js";
import secureLocalStorage from "react-secure-storage";

const userDash = (profile) => {
  let navdash = "";

  if (profile === null) {
    return (navdash = "/");
  }

  if (profile.role === "admin") {
    navdash = "/admin/noticeboard";
  } else if (profile.role === "teacher") {
    navdash = "/teacher/noticeboard";
  } else if (profile.role === "parent") {
    navdash = "/parent/noticeboard";
  } else if (profile.role === "student") {
    navdash = "/student/noticeboard";
  } else {
    navdash = "/";
  }
  return navdash;
};

const handleLogout = async () => {
  try {
    console.log("logging out....");
    await AuthService.logout();
    secureLocalStorage.clear();
    return window.location.assign("/");
  } catch (e) {
    console.log(e.message);
  }
};

export { userDash, handleLogout };
