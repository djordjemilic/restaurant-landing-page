import React from "react";
import styles from "./dishes.module.scss";

const Dishes = ({ name, price, description }) => {
  return (
    <div className={styles.dishesContainer}>
      <div className={styles.dishes}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default Dishes;
