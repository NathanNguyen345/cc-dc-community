// create a functional component called Homepage
import React from "react";
import styles from "./home.module.css";
import splashImg from "../../assets/images/splashImg.png";
import Button from "../button/Button";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.title}>
          <h4>
            Empowering Success: Unleash Your ACS/DC Potential with Our
            All-in-One Solution
          </h4>
        </div>
        <div className={styles.desc}>
          <p>
            Unleash limitless potential with our trifecta of Samples,
            Integrations, & Tools. Seamlessly integrate and leverage
            cutting-edge Tools to propel your success and unlock new horizons of
            achievement.
          </p>
        </div>
        <div className={styles.splashImg}>
          <img src={splashImg} alt="splashImg" />
        </div>

        <div className={styles.button}>
          <Button text="Click to get started" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
