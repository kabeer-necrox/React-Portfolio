import React from "react";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div className={styles.navbarBox}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
