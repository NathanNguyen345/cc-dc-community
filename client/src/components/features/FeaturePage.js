// Create react component for feature page

import React from "react";
import styles from "./featurePage.module.css";
import Button from "../button/Button";
import KeyFeatureCard from "../keyFeatureCard/KeyFeatureCard";
import FeatureHighlights from "./FeatureHighlights";

const FeaturePage = ({ color }) => {
  const root = document.documentElement;

  root.style.setProperty("--pageColor", `var(--pageColor${color})`);
  root.style.setProperty("--sectionColor", `var(--sectionColor${color})`);

  return (
    <div className={styles.pageBackgroundContainer}>
      <div className="container">
        <div
          className={`${styles.featurePageSection} ${styles.pageColor} ${styles.featureIntro}`}
        >
          <div className="content">
            <div className={styles.title}>
              <h1>ACS & DC Integrations</h1>
            </div>
            <div className={styles.desc}>
              <p>
                Seamless Integration Made Simple: Enhancing Application
                Usability with ACS & DC Integrated Solutions
              </p>
            </div>
          </div>
        </div>

        <div className={styles.featureTopWave}></div>

        <div className={styles.featurePageSection}>
          <div className={`content ${styles.featureContent}`}>
            <div className={styles.featureBulletPoints}>
              <div className={styles.bulletItem}>
                <KeyFeatureCard
                  title={"What ACS & DC Tools Are"}
                  desc={
                    "Simplify the lives of DC developers with our comprehensive toolbox, empowering them with a versatile set of tools. Streamline workflows, enhance productivity, and unlock new levels of efficiency in just a few clicks."
                  }
                  img={"tool"}
                  color={"White"}
                />
              </div>
              <div className={styles.bulletItem}>
                <KeyFeatureCard
                  title={"When to use ACS & DC Tools"}
                  desc={
                    "Empower developers and admins with the essential ACS DC Tools designed to streamline the entire lifecycle of Document Cloud Solutions, from initial setup and development to migration and day-to-day operations. Simplify complex tasks, boost productivity, and maximize the efficiency of your ACS DC environment with our comprehensive toolkit."
                  }
                  img={"tool"}
                  color={"White"}
                />
              </div>
              <div className={styles.bulletItem}>
                <KeyFeatureCard
                  title={"What ACS Samples Are "}
                  desc={
                    "Educational DC Building Blocks: Well-Commented Code Samples for Enlightening DC Developers. Accelerate Your Implementation with Structural Skeletons and Empower Your Own Solutions!"
                  }
                  img={"tool"}
                  color={"White"}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.featurePageSection} ${styles.featurePageSectionColorGrey}`}
        >
          <div className={`content ${styles.featureContent}`}>
            <FeatureHighlights imgFirst={false} />
          </div>
        </div>

        <div className={`${styles.featurePageSection} ${styles.sectionColor}`}>
          <div className={`content ${styles.featureContent}`}>
            <FeatureHighlights imgFirst={true} />
          </div>
        </div>

        <div className={styles.featurePageSection}>
          <div className={`content ${styles.featureContent}`}>
            <div className={styles.featureCallToAction}>
              <h1>
                Unleash the Possibilities: Discover a World of Powerful Features
              </h1>
              <Button text="More Features" />
            </div>
          </div>
        </div>

        <div className={styles.featureBottomWave}></div>
      </div>

      <div>
        <h1>FOOTER GOES HERE</h1>
      </div>
    </div>
  );
};

export default FeaturePage;
