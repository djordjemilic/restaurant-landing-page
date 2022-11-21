import React, { useEffect } from "react";
import styles from "./facts.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function Facts() {
  useEffect(() => {
    Aos.init({ duration: 1500, disable: "mobile" });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.facts}>
          <div className={styles.fact} data-aos="flip-up">
            <h2>20</h2>
            <h3>Restaurants</h3>
          </div>
          <div className={styles.fact} data-aos="flip-up">
            <h2>9</h2>
            <h3>Years of Experience</h3>
          </div>
          <div className={styles.fact} data-aos="flip-up">
            <h2>50+</h2>
            <h3>Menu Dishes</h3>
          </div>
          <div className={styles.fact} data-aos="flip-up">
            <h2>250+</h2>
            <h3>Happy Customers</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facts;
