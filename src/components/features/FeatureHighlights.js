/************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.

 *************************************************************************
 */
import React from "react";
import styles from "./featurePage.module.css";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const FeatureHighlights = ({ title, desc, imgFirst }) => {
  const layoutType = imgFirst;
  const [divRef, isInView] = useIntersectionObserver();
  const [divRef2, isInView2] = useIntersectionObserver();

  const RenderHTML = ({ layoutType }) => {
    if (layoutType) {
      return (
        <>
          <div className={styles.featureHighlightsContainer}>
            <div
              className={`${styles.featureHighlightsItemContainer} ${styles.featureHighlightItemContainerReverse}`}
            >
              <div
                className={`${
                  isInView
                    ? styles.featureItemEnterLeft
                    : styles.featureItemHide
                } ${styles.featureItem}`}
                ref={divRef}
              >
                <div className={styles.testImgSVG}></div>
              </div>

              <div
                className={`${
                  isInView2
                    ? styles.featureItemEnterRight
                    : styles.featureItemHide
                } ${styles.featureItem}`}
                ref={divRef2}
              >
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
              <div
                className={`${
                  isInView
                    ? styles.featureItemEnterLeft
                    : styles.featureItemHide
                } ${styles.featureItem}`}
                ref={divRef}
              >
                <h1>{title}</h1>
                <p>{desc}</p>
              </div>

              <div
                className={`${
                  isInView2
                    ? styles.featureItemEnterRight
                    : styles.featureItemHide
                } ${styles.featureItem}`}
                ref={divRef2}
              >
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
