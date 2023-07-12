// create a functional component called Homepage
import React from "react";
import styles from "./home.module.css";
import splashImg from "../../assets/images/splashImg.png";
import spotlghtImg from "../../assets/images/spotlightImg.png";
import aboutImg from "../../assets/images/aboutImg.png";
import Button from "../button/Button";
import KeyFeatureCard from "../keyFeatureCard/KeyFeatureCard";

const Homepage = () => {
  return (
    <div className={styles.container}>
      {/* 
      ********************************************************************************
                                        Splash section                              
      ********************************************************************************
      */}
      <div className={styles.splashGridContainer}>
        <div className={styles.title}>
          <h4>
            <span>Empowering Success:</span> Unleash Your ACS/DC Potential with
            Our All-in-One Solution
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
        <div className={`${styles.splashImg} ${styles.centerDiv}`}>
          <img src={splashImg} alt="splashImg" />
        </div>

        <div className={styles.button}>
          <Button text="Click to get started" />
        </div>
      </div>

      {/*
      ********************************************************************************
                                        Spotlight section
      ********************************************************************************
      */}
      <div className={styles.spotlightGridContainer}>
        <div className={styles.spotlightTitle}>
          <h4>
            Unleash Our Versatile <span>API</span> Anywhere, Anytime!
          </h4>
        </div>
        <div className={styles.spotlightDesc}>
          <p>
            Elevate your applications with ease using Acrobat Sign’s REST API.
            Seamlessly integrate powerful Acrobat Sign functionality into your
            own software, unlocking a world of possibilities for streamlined
            document signing and management.
          </p>
        </div>
        <div className={`${styles.spotlightImg} ${styles.centerDiv}`}>
          <img src={spotlghtImg} alt="spotlightImg" />
        </div>

        <div className={styles.button}>
          <Button text="Click to get started" />
        </div>
      </div>

      {/*
      ********************************************************************************
                                        Key Feature section   
      ********************************************************************************
      */}
      <div className={styles.keyfeatureGridContainer}>
        <div className={`${styles.keyfeatureTitle} ${styles.centerDiv}`}>
          <h4>
            Transforming Ideas into Powerful <span>Solutions</span>
          </h4>
        </div>
        <div className={styles.key1}>
          <KeyFeatureCard
            title={"Integrations"}
            desc={"Document Cloud integrations to accelerate deployment."}
            img={"gear"}
          />
        </div>
        <div className={styles.key2}>
          <KeyFeatureCard
            title={"Sample"}
            desc={
              "Collection of Document Cloud code samples, examples, and templates"
            }
            img={"file"}
          />
        </div>
        <div className={styles.key3}>
          <KeyFeatureCard
            title={"Tool"}
            desc={
              "A set of tools for Document Cloud to make developer lives easier"
            }
            img={"tool"}
          />
        </div>
      </div>

      {/*
      ********************************************************************************
                                        About section
      ********************************************************************************
      */}
      <div className={styles.aboutGridContainer}>
        <div className={styles.aboutTitle}>
          <h4>
            Meet the <span>Visionaries</span> Empowering this Transformation
          </h4>
        </div>
        <div className={styles.aboutDesc}>
          <p>
            We specialize in developing custom solutions for Adobe products,
            including Adobe Document Cloud. With expertise in applications like
            Acrobat, Acrobat Sign, Acrobat Services, and Scan, we transform
            document management and streamline workflows to empower your
            productivity. Please note that the the Document Cloud developer
            community maintains this repository.
          </p>
        </div>
        <div className={`${styles.aboutImg} ${styles.centerDiv}`}>
          <img src={aboutImg} alt="aboutImg" />
        </div>
      </div>

      {/*
      ********************************************************************************
                                        Contact section
      ********************************************************************************
      */}
      <div className={styles.contactGridContainer}>
        <div className={styles.contactTitle}>
          <h4>
            Have Questions? <span>Contact</span> Us for Expert Assistance!
          </h4>
        </div>

        <div className={styles.contactButton}>
          <Button text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
