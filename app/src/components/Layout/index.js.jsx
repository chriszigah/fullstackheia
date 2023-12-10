import React from "react";
import Footer from "./footer";
import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <div className="contianer">
      <Nav />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
