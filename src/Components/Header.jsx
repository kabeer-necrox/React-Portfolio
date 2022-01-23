import React from "react";
import { Navbar } from "./Navbar";
import styles from "./header.module.css";
import MyPic from "../Images/pic1.png";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BsLinkedin, BsGithub, BsGoogle } from "react-icons/bs";
const Header = () => {
  return (
    <div className={styles.headerMainBox}>
      <Navbar />
      <section className={styles.headerCOntent}>
        <div className={styles.intro}>
          <h3>HI There !</h3>
          <h1>I AM JAFFAR AMAN</h1>
          <h3>MERN Stack Developer</h3>
          <div className={styles.socialIcon}>
            <li>
              <FaFacebook size={28} />
            </li>
            <li>
              <FaWhatsapp size={28} />
            </li>
            <li>
              <BsGithub size={28} />
            </li>
            <li>
              <BsLinkedin size={28} />
            </li>
            <li>
              <BsGoogle size={28} />
            </li>
          </div>
          <button>SEE MY WORK</button>
        </div>
        <div className={styles.picture}>
          <img src={MyPic} />
        </div>
      </section>
    </div>
  );
};

export default Header;
