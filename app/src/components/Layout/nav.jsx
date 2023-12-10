import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
        miClass
      </a>
      <div className="navbar-nav mr-auto">
        <Link className="navbar-item" to="/tutorial">
          Tutorials
        </Link>
        <Link className="navbar-item" to="/tutoriallist">
          Tutorials{" "}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
