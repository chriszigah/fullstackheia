import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from "./style.module.css";
import { LINKS } from "./data.js";
import { IoMenuOutline as MenuIcon } from "react-icons/io5";
import { logo } from "../images";
import Sidebar from "../Sidebar/Sidebar";
import secureLocalStorage from "react-secure-storage";
import { userDash } from "../helpers.js";

const NavBar = () => {
  let Suser = secureLocalStorage.getItem("user");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Suser = secureLocalStorage.getItem("user");
  }, [Suser]);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <header className={classes.navwrapper}>
      <div className={classes.navbar}>
        {/* Logo */}
        <div className={classes.logo}>
          <img src={logo} alt="heia_ logo" />
          <NavLink to="/">HEIA</NavLink>
        </div>
        {/* Links */}
        <div className={classes.links}>
          {Suser === null ? (
            LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? classes.activeNavLink : ""
                }
              >
                {link.name}
              </NavLink>
            ))
          ) : (
            <div className={classes.dashNav}>
              <NavLink
                to={userDash(Suser)}
                className="btn-info pull-right dashNav"
              >
                GO TO DASHBOARD
              </NavLink>
            </div>
          )}
        </div>

        {/* Nav Menu Btn */}
        {Suser !== null ? (
          <div className={classes.menuBtn}>
            <div className={classes.dashNav}>
              <NavLink
                to={userDash(Suser)}
                className="btn-info pull-right dashNav"
              >
                GO TO DASHBOARD
              </NavLink>
            </div>
          </div>
        ) : (
          <div className={classes.menuBtn} onClick={openSidebar}>
            <MenuIcon size={30} />
          </div>
        )}
      </div>
      <Sidebar isOpen={isOpen} isClose={closeSidebar} links={LINKS} />
    </header>
  );
};

export default NavBar;
