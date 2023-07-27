import React from "react";
import styles from "./featurePage.module.css";

const FeatureHighlights = ({ title, desc, imgFirst }) => {
  const layoutType = imgFirst;

  const RenderHTML = ({ layoutType }) => {
    if (layoutType) {
      return (
        <>
          <div className={styles.featureHighlightsContainer}>
            <div className={styles.featureHighlightsItemContainer}>
              <div className={styles.featureItem}>
                <div className={styles.testImgSVG}></div>
              </div>

              <div className={styles.featureItem}>
                <h1>{title}</h1>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.featureHighlightsContainer}>
            <div className={styles.featureHighlightsItemContainer}>
              <div className={styles.featureItem}>
                <h1>{title}</h1>
                <p>{desc}</p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.testImgSVG}></div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className={styles.featureHighlight}>{RenderHTML({ layoutType })}</div>
  );
};

export default FeatureHighlights;
