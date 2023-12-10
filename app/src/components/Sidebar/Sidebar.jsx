import classes from "./style.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, isClose, links }) => {
  return (
    <>
      <div className={`${classes.sidebar} ${isOpen && classes.open}  `}>
        <span className={classes.closeIcon}>
          <IoCloseCircleOutline size={30} onClick={isClose} />
        </span>
        <div className={classes.links}>
          {links.map((link) => (
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
      ;
    </>
  );
};

export default Sidebar;
