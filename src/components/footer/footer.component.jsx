import React from "react";
import styles from "./footer.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <span className={styles.logo}>Foody</span>
          <span className={styles.copyright}>
            © Copyright Food. All rights reserved
          </span>
        </div>

        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li className={styles.socialsContainer}>
            Get in Touch
            <ul className={styles.socials}>
              <li>
                <FaGithub />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <SiGmail />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
