import React, { useEffect } from "react";
import styles from "./dishes.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Dishes = ({ name, price, description }) => {
  useEffect(() => {
    Aos.init({ duration: 1500, disable: "mobile" });
  }, []);

  return (
    <div className={styles.dishesContainer} data-aos="zoom-out-up">
      <div className={styles.dishes}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default Dishes;
