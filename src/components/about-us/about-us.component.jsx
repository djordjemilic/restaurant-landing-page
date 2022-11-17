import React from "react";
import styles from "./about-us.module.scss";
import bg1 from "../../assets/bg1.jpg";
import restaurant from "../../assets/restaurant.jpg";

function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.bg1}>
        <img src={bg1} alt="bg1" />
      </div>

      <div className={styles.restaurant}>
        <img src={restaurant} alt="restaurant" />
        <div className={styles.aboutUs}>
          <h2>About Us</h2>
          <h3>We always Serve You Better</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            laoreet tincidunt ante posuere vulputate. Curabitur convallis est
            nec maximus ornare. Nunc id urna id arcu pretium blandit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
