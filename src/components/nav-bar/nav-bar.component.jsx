import React, { useState } from "react";
import { Link } from "react-scroll";
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
        <li>
          <Link
            className={styles.link}
            to="/"
            spy={true}
            smooth={true}
            offset={0}
            duration={400}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            className={styles.link}
            spy={true}
            smooth={true}
            offset={-150}
            duration={400}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="menu"
            className={styles.link}
            spy={true}
            smooth={true}
            offset={-150}
            duration={400}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="reservation"
            className={styles.link}
            spy={true}
            smooth={true}
            offset={-150}
            duration={400}
          >
            Reservation
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
