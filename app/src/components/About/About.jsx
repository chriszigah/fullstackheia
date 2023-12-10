import { heiabanner } from "../images";
import classes from "./style.module.css";

const About = () => {
  return (
    <>
      <div id="about" className={classes.aboutSection}>
        <div className={classes.aboutInfo}>
          <div className={classes.aboutInfoWrapper}>
            <div className={classes.aboutInfoColumn}>
              <div className={classes.aboutImg}>
                <img src={heiabanner} alt="About" width="100%" />
              </div>
            </div>
            <div className={classes.aboutInfoColumn}>
              <h3>About HEIA</h3>
              <p>
                High End International Academy had a successful 22-year history
                as a private school, offering education from the creche level to
                Junior High School (JHS). With a student population of 542, the
                school prided itself on providing a comprehensive educational
                experience. In addition to the core academic curriculum and
                extracurricular which includes culture, coding, choreography,
                choir, drama, and specialized programs in mathematics and
                science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
