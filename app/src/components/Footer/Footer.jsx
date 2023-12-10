import React from "react";
import classes from "./style.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.siteFooter}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>CONTACT US NOW</h6>
              <ul className={classes.footerLinks}>
                <li>
                  <a href="/">
                    <span className="material-symbols-rounded"> house </span> 86
                    Nii Sai Wulu Rd - East Legon
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="material-symbols-rounded"> globe </span>{" "}
                    Accra - Ghana
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="material-symbols-rounded">
                      {" "}
                      deskphone{" "}
                    </span>{" "}
                    Telphone: 030413379
                  </a>
                </li>

                <li>
                  <a href="/">
                    <span className="material-symbols-rounded"> phone </span>{" "}
                    Mobile: 0246 242 984 / 0249 819 724
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="material-symbols-rounded"> email </span>{" "}
                    info@heia.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Console</h6>
              <ul className={classes.footerLinks}>
                <li>
                  <a href="/login">Students</a>
                </li>
                <li>
                  <a href="/tlogin">Teachers</a>
                </li>
                <li>
                  <a href="/plogin">Parents</a>
                </li>
                <li>
                  <a href="/rlogin">Researchers</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Links</h6>
              <ul className={classes.footerLinks}>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/admission">Admission</a>
                </li>
                <li>
                  <a href="/payfees">Pay Fees</a>
                </li>
                <li>
                  <a href="/complains">complains</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </footer>
      <div className={classes.footerCopyright}>
        Built and Maintained by{" "}
        <a href="http://elicanschool.com">ELICAN SCHOOL - ECODERS </a>
        powered by <a href="https://ghana.edify.org/">EDIFY.</a>
      </div>
    </>
  );
};

export default Footer;
