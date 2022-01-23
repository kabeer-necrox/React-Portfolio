import React from "react";
import styles from "./logoDiv.module.css";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
const LogoDiv = () => {
  return (
    <div className={styles.mainBox}>
      <ul>
        <li className={styles.mongo}>
          <SiMongodb />
        </li>
        <li className={styles.express}>
          <SiExpress />
        </li>
        <li className={styles.react}>
          <SiReact />
        </li>
        <li className={styles.nodejs}> 
          <SiNodedotjs />
        </li>
      </ul>
    </div>
  );
};

export default LogoDiv;
