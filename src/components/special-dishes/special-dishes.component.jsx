import React from "react";
import Dishes from "../dishes/dishes.component";
import styles from "./special-dishes.module.scss";

const SpecialDishes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Special Dishes</h1>
        <h2>Best Recommendation Menu</h2>
      </div>

      <div className={styles.dishes}>
        <div className={styles.col1}>
          <Dishes
            name="Beef Burger"
            price="32"
            description="Classic greek salad, barrel aged feta"
          />
          <Dishes
            name="Beef Burger"
            price="32"
            description="Classic greek salad, barrel aged feta"
          />
          <Dishes
            name="Beef Burger"
            price="32"
            description="Classic greek salad, barrel aged feta"
          />
          <Dishes
            name="Beef Burger"
            price="32"
            description="Classic greek salad, barrel aged feta"
          />
        </div>

        <div className={styles.col2}>
          <Dishes
            name="Beef Burger"
            price="32"
            description="Classic greek salad, barrel aged feta"
          />
          <Dishes
            name="Beef Burger"
            price="32"
            description="Classic greek salad, barrel aged feta"
          />
          <Dishes
            name="Beef Burger"
            price="32"
            description="Classic greek salad, barrel aged feta"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialDishes;
