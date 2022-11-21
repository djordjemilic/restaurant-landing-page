import React, { useEffect } from "react";
import styles from "./about-us.module.scss";
import bg1 from "../../assets/bg1.jpg";
import restaurant from "../../assets/restaurant.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.container} id="about">
      <div className={styles.bg1} data-aos="zoom-out-up">
        <img src={bg1} alt="bg1" />
      </div>

      <div className={styles.restaurant}>
        <img data-aos="zoom-in-up" src={restaurant} alt="restaurant" />
        <div className={styles.aboutUs} data-aos="fade-right">
          <h2>About Us</h2>
          <h3>We always Serve You Better</h3>
          <p>
            The Foody group appeared in 2012 from an idea born in Las Vegas and
            comes from the world-famous excellent Japanese chef Yoshi Maru
            Honda.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
