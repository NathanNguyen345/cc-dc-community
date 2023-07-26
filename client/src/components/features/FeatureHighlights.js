import React from "react";
import styles from "./featurePage.module.css";

const FeatureHighlights = ({ imgFirst }) => {
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
                <h1>Sign to Sign Migration</h1>
                <p>
                  Simplify Template Migration: Our intuitive desktop application
                  seamlessly transfers templates between Sign instances,
                  eliminating the complexities of manual migration. Effortlessly
                  manage and relocate templates, ensuring a smooth transition
                  and saving valuable time in the process. Empower your workflow
                  by streamlining template migration with our user-friendly
                  desktop solution.
                </p>
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
                <h1>Sign to Sign Migration</h1>
                <p>
                  Simplify Template Migration: Our intuitive desktop application
                  seamlessly transfers templates between Sign instances,
                  eliminating the complexities of manual migration. Effortlessly
                  manage and relocate templates, ensuring a smooth transition
                  and saving valuable time in the process. Empower your workflow
                  by streamlining template migration with our user-friendly
                  desktop solution.
                </p>
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
