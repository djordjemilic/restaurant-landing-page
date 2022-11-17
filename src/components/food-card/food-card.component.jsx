import React from "react";
import styles from "./food-card.module.scss";

function FoodCard({ foodIcon, ctg, description }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}>{foodIcon}</div>
      <h2>{ctg}</h2>
      <p>{description}</p>
    </div>
  );
}

export default FoodCard;
