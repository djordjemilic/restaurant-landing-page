import React from "react";
import styles from "../specialities/specialities.module.scss";
import FoodCard from "../food-card/food-card.component";
import { ReactComponent as Western } from "../../assets/food/western.svg";
import { ReactComponent as Eastern } from "../../assets/food/eastern.svg";
import { ReactComponent as Japan } from "../../assets/food/japan.svg";
import { ReactComponent as Korean } from "../../assets/food/korean.svg";

function Specialities() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Specialities</h1>
        <h2>Our Special Cusisine</h2>
      </div>

      <div className={styles.cards}>
        <div className={styles.row1}>
          <FoodCard
            foodIcon={<Western />}
            ctg="Western"
            description="Lorem ipsum dolor sit amet conscetur, adactipn
        dolor sit amet conscetur, adactipn"
          />
          <FoodCard
            foodIcon={<Eastern />}
            ctg="Eastern"
            description="Lorem ipsum dolor sit amet conscetur, adactipn
        dolor sit amet conscetur, adactipn"
          />
        </div>
        <div className={styles.row2}>
          <FoodCard
            foodIcon={<Japan />}
            ctg="Japanese"
            description="Lorem ipsum dolor sit amet conscetur, adactipn
        dolor sit amet conscetur, adactipn"
          />
          <FoodCard
            foodIcon={<Korean />}
            ctg="Korean"
            description="Lorem ipsum dolor sit amet conscetur, adactipn
        dolor sit amet conscetur, adactipn"
          />
        </div>
      </div>
    </div>
  );
}

export default Specialities;
