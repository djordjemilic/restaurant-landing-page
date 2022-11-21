import React, { useEffect } from "react";
import styles from "../specialities/specialities.module.scss";
import FoodCard from "../food-card/food-card.component";
import { ReactComponent as Western } from "../../assets/food/western.svg";
import { ReactComponent as Eastern } from "../../assets/food/eastern.svg";
import { ReactComponent as Japan } from "../../assets/food/japan.svg";
import { ReactComponent as Korean } from "../../assets/food/korean.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function Specialities() {
  useEffect(() => {
    Aos.init({ duration: 1500, disable: "mobile" });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 data-aos="slide-left">Specialities</h1>
        <h2 data-aos="slide-right">Our Special Cuisine</h2>
      </div>

      <div className={styles.cards}>
        <div className={styles.row1} data-aos="fade-right">
          <FoodCard
            foodIcon={<Western />}
            ctg="Western"
            description="Western dish includes meat of any sort, dairy products, vegetables, and  grape wine"
          />
          <FoodCard
            foodIcon={<Eastern />}
            ctg="Eastern"
            description="Eastern cuisine represents tastes and textures of a mosaic heritage of identities. "
          />
        </div>
        <div className={styles.row2} data-aos="fade-left">
          <FoodCard
            foodIcon={<Japan />}
            ctg="Japanese"
            description="The traditional cuisine of Japan  is based on rice with miso soup and other dishes;"
          />
          <FoodCard
            foodIcon={<Korean />}
            ctg="Korean"
            description="Korean cuisine is largely based on rice, vegetables, seafood and  meats."
          />
        </div>
      </div>
    </div>
  );
}

export default Specialities;
