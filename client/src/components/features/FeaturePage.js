// Create react component for feature page

import React, { useState, useEffect } from "react";
import styles from "./featurePage.module.css";
import Button from "../button/Button";
import KeyFeatureCard from "../keyFeatureCard/KeyFeatureCard";
import FeatureHighlights from "./FeatureHighlights";
import { useLocation } from "react-router-dom";

const FeaturePage = ({ color, type }) => {
  const root = document.documentElement;
  const [dynamicContent, setDynamicContent] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    root.style.setProperty("--pageColor", `var(--pageColor${color})`);
    root.style.setProperty("--sectionColor", `var(--sectionColor${color})`);
  }, [location]);

  useEffect(() => {
    const getData = () => {
      try {
        fetch(`http://localhost:3000/data/pages/${type}PageData.json`)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            setDynamicContent(data);
          });
      } catch (err) {
        alert("Error loading page, Please contact us for assistance.");
      }
    };

    getData();
  }, [type]);

  if (!dynamicContent) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.pageBackgroundContainer}>
      <div className="container">
        <div
          className={`${styles.featurePageSection} ${styles.pageColor} ${styles.featureIntro}`}
        >
          <div className="content">
            <div className={styles.title}>
              <h1>{dynamicContent["title"]}</h1>
            </div>
            <div className={styles.desc}>
              <p>{dynamicContent["tagLine"]}</p>
            </div>
          </div>
        </div>

        <div className={styles.featureTopWave}></div>

        <div className={styles.featurePageSection}>
          <div className={`content ${styles.featureContent}`}>
            <div className={styles.featureBulletPoints}>
              <div className={styles.bulletItem}>
                <KeyFeatureCard
                  title={dynamicContent["bulletInfo"][0]["bulletTitle"]}
                  desc={dynamicContent["bulletInfo"][0]["bulletDesc"]}
                  img={dynamicContent["bulletInfo"][0]["bulletIcon"]}
                  color={"White"}
                />
              </div>
              <div className={styles.bulletItem}>
                <KeyFeatureCard
                  title={dynamicContent["bulletInfo"][1]["bulletTitle"]}
                  desc={dynamicContent["bulletInfo"][1]["bulletDesc"]}
                  img={dynamicContent["bulletInfo"][1]["bulletIcon"]}
                  color={"White"}
                />
              </div>
              <div className={styles.bulletItem}>
                <KeyFeatureCard
                  title={dynamicContent["bulletInfo"][2]["bulletTitle"]}
                  desc={dynamicContent["bulletInfo"][2]["bulletDesc"]}
                  img={dynamicContent["bulletInfo"][2]["bulletIcon"]}
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
            <FeatureHighlights
              title={dynamicContent["highlightFeature"][0]["highlightTitle"]}
              desc={dynamicContent["highlightFeature"][0]["highlightDesc"]}
              imgFirst={false}
            />
          </div>
        </div>

        <div className={`${styles.featurePageSection} ${styles.sectionColor}`}>
          <div className={`content ${styles.featureContent}`}>
            <FeatureHighlights
              title={dynamicContent["highlightFeature"][1]["highlightTitle"]}
              desc={dynamicContent["highlightFeature"][1]["highlightDesc"]}
              imgFirst={true}
            />
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
