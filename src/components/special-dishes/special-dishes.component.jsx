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
            name="HANGOVER BURGER"
            price="23$"
            description="Crispy hash browns, Applewood-smoked bacon, lettuce, tomatos, pickles"
          />
          <Dishes
            name="LEMON CHICKEN"
            price="19$"
            description="Two lemon-pepper chicken breasts grilled to perfection"
          />
          <Dishes
            name="GRILLED SALMON"
            price="32$"
            description="Lightly seasoned grilled salmon, served with a choice of two sides and a dinner roll"
          />
          <Dishes
            name="SOURDOUGH PATTY MELT"
            price="29$"
            description="Tillamook cheddar, caramelized onions, special sauce"
          />
        </div>

        <div className={styles.col2}>
          <Dishes
            name="CHICKEN QUESADILLA"
            price="12$"
            description="Grilled chicken, melted cheddar and peper jack chesses served with guacamole and sour cream"
          />
          <Dishes
            name="THE TRIP DIP & CHIPS"
            price="15$"
            description="Queso, guacamole, salsa and tortilla chips"
          />
          <Dishes
            name="CEASAR SALAD"
            price="20$"
            description="Romaine lettuce tossed in our delicious Ceasar dressing, tossed with Parmesan cheese and crunchy croutons"
          />
          <Dishes
            name="NORTHWEST SALAD"
            price="22$"
            description="Toased bread with bleu cheese, candied pecans, grilled red onions, romaine lettuce and our raspberry balsamic vinaigrette"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialDishes;
