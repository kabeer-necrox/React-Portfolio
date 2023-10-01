import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import styles from "./header.module.css";
import MyPic from "../Images/pic1.png";
import kabir from "../Images/kabir.jpeg"
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BsLinkedin, BsGithub, BsGoogle } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={styles.headerMainBox}>
      {/* <Navbar /> */}
      <section className={styles.headerCOntent}>
        <div className={styles.intro}>
          <h3 data-aos="fade-up" data-aos-duration="2000">
            HI There !
          </h3>
          <h1 data-aos="fade-down" data-aos-duration="3000">
            I AM KHUSH KABEER
          </h1>
          <h3 data-aos="fade-up" data-aos-duration="2000">
            MERN Stack Developer
          </h3>

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
          <img data-aos="fade-down" data-aos-duration="2000" src={kabir} />
        </div>
      </section>
    </div>
  );
};

export default Header;
