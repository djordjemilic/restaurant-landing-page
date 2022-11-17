import React from "react";
import styles from "./home.module.scss";
import Navbar from "../nav-bar/nav-bar.component";
import { BsArrowRight } from "react-icons/bs";
import eating from "../../assets/eating.jpg";

function Home() {
  return (
    <div className={styles.home}>
      {/*Navbar*/}
      <div className={styles.nav}>
        <Navbar />
      </div>

      {/*BG1*/}
      <div className={styles.bg1}>
        <div className={styles.photo1}>
          <div className={styles.photoContainer}>
            <img src={eating} alt="eating" />
          </div>
        </div>
      </div>

      {/*Slogan*/}
      <div className={styles.slogan}>
        <h1>{`Feel The Authenthic & Original Taste From Us`}</h1>
        <p>Lorem ipsum dolor, sit amet consecture adispicing elite soluta </p>

        <button className={styles.btn}>
          <span>See more</span>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Home;
