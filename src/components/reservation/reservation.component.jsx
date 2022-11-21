import React, { useEffect } from "react";
import styles from "./reservation.module.scss";
import restaurant from "../../assets/restaurant.jpg";
import { BsArrowRight } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Reservation = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.container} id="reservation">
      <div className={styles.inner} data-aos="slide-down">
        <div className={styles.leftContainer} data-aos="zoom-in-right">
          <div className={styles.description}>
            <div className={styles.title}>
              <h1 data-aos="slide-right">Reservation</h1>
              <h2 data-aos="slide-right">
                Join Us at The Foody for an exquisite dining experience.
              </h2>
            </div>

            <p data-aos="slide-right">
              We are providing the best contemporary Japanese and Mediterranean
              culinary journey you can embark on.
            </p>
          </div>
        </div>

        <div className={styles.rightContainer} data-aos="zoom-in-left">
          <div className={styles.formContainer}>
            <form action="">
              <div className={styles.imgContainer}>
                <img src={restaurant} alt="restaurant" />
              </div>

              <div className={styles.formInner}>
                <input type="name" className={styles.name} placeholder="Name" />

                <div className={styles.dateTime}>
                  <input type="date" className={styles.date} />
                  <input type="time" className={styles.time} />
                </div>

                <button>
                  <span>Book Now</span>
                  <BsArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
