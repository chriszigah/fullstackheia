import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { userDash } from "../../helpers.js";
const AuthRoutes = () => {
  let Suser = secureLocalStorage.getItem("user");

  useEffect(() => {
    Suser = secureLocalStorage.getItem("user");
  }, []);

  if (Suser === null) {
    return <Navigate to="/login" />;
  }
  const pname = window.location.pathname.slice(1, 4);
  const urole = Suser.role.slice(0, 3);

  return pname === urole || Suser.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to={userDash(Suser)} />
  );
};

export default AuthRoutes;
