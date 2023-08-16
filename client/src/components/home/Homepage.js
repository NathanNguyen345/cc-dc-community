import React, { useEffect } from "react";
import styles from "./home.module.css";
import splashImg from "../../assets/images/splashImg.png";
import spotlghtImg from "../../assets/images/spotlightImg.png";
import aboutImg from "../../assets/images/aboutImg.png";
import Button from "../button/Button";
import KeyFeatureCard from "../keyFeatureCard/KeyFeatureCard";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [divRef, isInView] = useIntersectionObserver();
  const [divRef2, isInView2] = useIntersectionObserver();
  const [divRef3, isInView3] = useIntersectionObserver();
  const [divRef4, isInView4] = useIntersectionObserver();
  const [divRef5, isInView5] = useIntersectionObserver();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container">
      <div className={styles.svgTop}></div>

      <div className="content">
        <div className={styles.splashContainer} ref={divRef}>
          <div
            className={
              isInView
                ? `${styles.sectionFlexEnter}`
                : `${styles.splashSectionFlex}`
            }
          >
            <div className={styles.title}>
              <h1>
                <span>Empowering Success:</span> Unleash Your ACS/DC Potential
                with Our All-in-One Solution
              </h1>
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
              <Link to="/search">
                <Button text="Find your perfect solution" />
              </Link>
            </div>
          </div>

          <div
            className={
              isInView
                ? `${styles.sectionImgFlexEnter}`
                : `${styles.splashImgFlex}`
            }
          >
            <div className={`${styles.homeImg} ${styles.homeImgRight}`}>
              <img src={splashImg} alt="splashImg" />
            </div>
          </div>
        </div>

        <div className={styles.spotlightContainer} ref={divRef2}>
          <div
            className={
              isInView2
                ? `${styles.sectionImgFlexEnter}`
                : `${styles.spotlightImgFlex}`
            }
          >
            <div className={`${styles.homeImg} ${styles.homeImgLeft} `}>
              <img src={spotlghtImg} alt="spotlightImg" />
            </div>
          </div>

          <div
            className={
              isInView2
                ? `${styles.sectionFlexEnter}`
                : `${styles.spotlightSectionFlex}`
            }
          >
            <div className={styles.spotlightTitle}>
              <h1>
                Unleash Our Versatile <span>API</span> Anywhere, Anytime!
              </h1>
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
              <Button
                text="Checkout our API today"
                externalLink="https://secure.na1.adobesign.com/public/docs/restapi/v6"
              />
            </div>
          </div>
        </div>

        <div className={styles.keyfeatureContainer} ref={divRef3}>
          <div
            className={
              isInView3
                ? `${styles.keyfeatureTitleEnter}`
                : `${styles.keyfeatureTitle}`
            }
          >
            <div className={styles.keyTitle}>
              <h1>
                Transforming Ideas into Powerful <span>Solutions</span>
              </h1>
            </div>
          </div>
          <div className={styles.keyfeatureContent}>
            <div
              className={isInView3 ? `${styles.itemEnter}` : `${styles.item}`}
            >
              <Link to="/integrations">
                <KeyFeatureCard
                  title={"Integrations"}
                  desc={"Document Cloud integrations to accelerate deployment."}
                  img={"gear"}
                  color={"Default"}
                />
              </Link>
            </div>
            <div
              className={isInView3 ? `${styles.itemEnter}` : `${styles.item}`}
            >
              <Link to="/samples">
                <KeyFeatureCard
                  title={"Sample"}
                  desc={
                    "Collection of Document Cloud code samples, examples, and templates"
                  }
                  img={"file"}
                  color={"Default"}
                />
              </Link>
            </div>
            <div
              className={isInView3 ? `${styles.itemEnter}` : `${styles.item}`}
            >
              <Link to="/tools">
                <KeyFeatureCard
                  title={"Tool"}
                  desc={
                    "A set of tools for Document Cloud to make developer lives easier"
                  }
                  img={"tool"}
                  color={"Default"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.aboutContainer} ref={divRef4}>
          <div
            className={
              isInView4
                ? `${styles.sectionFlexEnter}`
                : `${styles.aboutSectionFlex}`
            }
          >
            <div className={styles.aboutTitle}>
              <h1>
                Meet the <span>Visionaries</span> Empowering this Transformation
              </h1>
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

          <div
            className={
              isInView4
                ? `${styles.sectionImgFlexEnter}`
                : `${styles.aboutImgFlex}`
            }
          >
            <div className={`${styles.homeImg} ${styles.homeImgRight}`}>
              <img src={aboutImg} alt="aboutImg" />
            </div>
          </div>
        </div>

        <div className={styles.contactContainer} ref={divRef5}>
          <div
            className={
              isInView5 ? `${styles.contactFlexEnter}` : `${styles.contactFlex}`
            }
          >
            <h1>
              Have Questions? <span>Contact</span> Us for Expert Assistance!
            </h1>
            <div className={styles.contactButton}>
              <Button text="Contact Us" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.svgBottom}></div>
    </div>
  );
};

export default Homepage;
