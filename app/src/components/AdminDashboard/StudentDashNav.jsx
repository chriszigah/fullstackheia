import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./dashboard.module.css";
import { LINKS } from "./data.js";
import { IoMenuOutline as MenuIcon } from "react-icons/io5";
import { logo } from "../images";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { handleLogout } from "../../components/helpers";

const AdminDashNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className={classes.navwrapper}>
        <div className={classes.navbar}>
          {/* Logo */}
          <div className={classes.logo}>
            <img src={logo} alt="heia_ logo" />
            <NavLink to="/">HEIA</NavLink>
          </div>
          <div className={classes.logout}>
            <NavLink
              onClick={handleLogout}
              className="btn-info pull-right logout"
            >
              LOGOUT
            </NavLink>
          </div>
          {/* Links */}

          {/* Nav Menu Btn */}
          <div className={classes.menuBtn} onClick={openSidebar}>
            <MenuIcon size={30} />
          </div>
        </div>
        <Sidebar isOpen={isOpen} isClose={closeSidebar} links={LINKS} />
      </header>
      <div className={classes.menuSetion}>
        <div className={classes.links}>
          {LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                isActive ? classes.activeNavLink : ""
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDashNav;
