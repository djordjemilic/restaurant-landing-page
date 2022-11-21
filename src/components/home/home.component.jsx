import React from "react";
import styles from "./home.module.scss";
import Navbar from "../nav-bar/nav-bar.component";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import eating from "../../assets/eating.jpg";

function Home() {
  return (
    <div className={styles.home} id="/">
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
        <p>
          It is not about being noticed, it's about being remembered. Our
          restaurants have the highest quality service and specific dedicated
          meal courses prepared by the best international chiefs.
        </p>

        <button className={styles.btn}>
          <span>
            {" "}
            <Link
              className={styles.link}
              to="menu"
              spy={true}
              smooth={true}
              offset={-300}
              duration={400}
            >
              See More
            </Link>
          </span>

          <BsArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Home;
