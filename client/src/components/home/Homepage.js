// create a functional component called Homepage
import React from "react";
import styles from "./home.module.css";
import splashImg from "../../assets/images/splashImg.png";
import spotlghtImg from "../../assets/images/spotlightImg.png";
import aboutImg from "../../assets/images/aboutImg.png";
import Button from "../button/Button";
import KeyFeatureCard from "../keyFeatureCard/KeyFeatureCard";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Homepage = () => {
  const [divRef, isInView] = useIntersectionObserver();
  const [divRef2, isInView2] = useIntersectionObserver();

  return (
    <div className={styles.container}>
      <div className={styles.svgTop}></div>
      <div className={styles.containerInner}>
        {/* 
      ********************************************************************************
                                        Splash Section                              
      ********************************************************************************
      */}
        <div className={styles.splashGridContainer} ref={divRef}>
          <div
            className={
              isInView
                ? `${styles.splashSectionFlexEnter}`
                : `${styles.splashSectionFlex}`
            }
          >
            <div className={styles.title}>
              <h4>
                <span>Empowering Success:</span> Unleash Your ACS/DC Potential
                with Our All-in-One Solution
              </h4>
            </div>
            <div className={styles.desc}>
              <p>
                Unleash limitless potential with our trifecta of Samples,
                Integrations, & Tools. Seamlessly integrate and leverage
                cutting-edge Tools to propel your success and unlock new
                horizons of achievement.
              </p>
            </div>
            <div className={styles.button}>
              <Button text="Click to get started" />
            </div>
          </div>

          <div
            className={
              isInView
                ? `${styles.splashImgFlexEnter}`
                : `${styles.splashImgFlex}`
            }
          >
            <div className={`${styles.centerDiv}`}>
              <img src={splashImg} alt="splashImg" />
            </div>
          </div>
        </div>
        {/*
      ********************************************************************************
                                        Spotlight Section
      ********************************************************************************
      */}
        <div className={styles.spotlightContainer} ref={divRef2}>
          <div
            className={
              isInView2
                ? `${styles.spotlightImgFlexEnter}`
                : `${styles.spotlightImgFlex}`
            }
          >
            <div className={`${styles.centerDiv}`}>
              <img src={spotlghtImg} alt="spotlightImg" />
            </div>
          </div>

          <div
            className={
              isInView2
                ? `${styles.spotlightSectionFlexEnter}`
                : `${styles.spotlightSectionFlex}`
            }
          >
            <div className={styles.spotlightTitle}>
              <h4>
                Unleash Our Versatile <span>API</span> Anywhere, Anytime!
              </h4>
            </div>
            <div className={styles.spotlightDesc}>
              <p>
                Elevate your applications with ease using Acrobat Sign’s REST
                API. Seamlessly integrate powerful Acrobat Sign functionality
                into your own software, unlocking a world of possibilities for
                streamlined document signing and management.
              </p>
            </div>
            <div className={styles.buttonRight}>
              <Button text="Click to get started" />
            </div>
          </div>
        </div>
        {/*
      ********************************************************************************
                                        Key Feature Section   
      ********************************************************************************
      */}
        <div className={styles.middeDiv}>
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
        </div>
        {/*
      ********************************************************************************
                                        About Section
      ********************************************************************************
      */}
        <div className={styles.aboutGridContainer}>
          <div className={styles.aboutSectionFlex}>
            <div className={styles.aboutTitle}>
              <h4>
                Meet the <span>Visionaries</span> Empowering this Transformation
              </h4>
            </div>
            <div className={styles.aboutDesc}>
              <p>
                We specialize in developing custom solutions for Adobe products,
                including Adobe Document Cloud. With expertise in applications
                like Acrobat, Acrobat Sign, Acrobat Services, and Scan, we
                transform document management and streamline workflows to
                empower your productivity. Please note that the the Document
                Cloud developer community maintains this repository.
              </p>
            </div>
          </div>

          <div className={styles.aboutImgFlex}>
            <div className={`${styles.centerDiv}`}>
              <img src={aboutImg} alt="aboutImg" />
            </div>
          </div>
        </div>
        {/*
      ********************************************************************************
                                        Contact Section
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
      <div className={styles.svgBottom}></div>
    </div>
  );
};

export default Homepage;
