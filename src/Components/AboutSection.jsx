import React from "react";
import styles from "./aboutsection.module.css";
import MyPic from "../Images/pic1.png";

const AboutSection = () => {
  return (
    <div className={styles.mainBox}>
      <section className={styles.aboutPic}>
        <img src={MyPic} alt="" />
      </section>
      <section className={styles.aboutme}>
        <h5>About Me</h5>
        <h1>HELLO WORLD</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam
          velit quae! Magni, sequi incidunt fugiat delectus officiis reiciendis
          placeat officia soluta odit laborum, aliquid qui, perspiciatis optio
          nulla. Pariatur a non optio debitis ipsam tenetur perspiciatis, animi
          aperiam alias!
        </p>
      </section>
    </div>
  );
};

export default AboutSection;
