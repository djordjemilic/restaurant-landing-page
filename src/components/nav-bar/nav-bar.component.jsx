import React, { useState } from "react";
import styles from "./nav-bar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  // Mobile state
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <span className={styles.logo}>Foody</span>
      </div>

      <div className={styles.mobileBars} onClick={() => setNavOpen(true)}>
        <FaBars />
      </div>

      <ul
        className={`${navOpen ? styles.menuMobileActive : undefined} ${
          styles.menu
        }`}
      >
        <li className={styles.mobileFaTimes} onClick={() => setNavOpen(false)}>
          <FaTimes />
        </li>
        <li>Home</li>
        <li>Menu</li>
        <li>Reservation</li>
        <li>News</li>
        <li>More</li>
      </ul>
    </nav>
  );
}

export default Navbar;
