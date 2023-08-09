import React, { useEffect, Fragment } from "react";
import styles from "./featurePage.module.css";
import Button from "../button/Button";
import KeyFeatureCard from "../keyFeatureCard/KeyFeatureCard";
import FeatureHighlights from "./FeatureHighlights";
import { useLocation } from "react-router-dom";
import useFeaturePageDataContext from "../../data/featurePageDataContext";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const FeaturePage = ({ color }) => {
  const location = useLocation();
  const { state } = useFeaturePageDataContext();
  const [divRef, isInView] = useIntersectionObserver();
  const [divRef2, isInView2] = useIntersectionObserver();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (typeof state.bulletInfo === "undefined") {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div className={styles.featurePageSection}>
        <div className={`content ${styles.featureContent}`}>
          <div
            className={`
              ${styles.featureBulletPointsEnter} ${styles.featureBulletPoints}`}
            ref={divRef}
          >
            <div className={styles.bulletItem}>
              <KeyFeatureCard
                title={state.bulletInfo[0]["bulletTitle"]}
                desc={state.bulletInfo[0]["bulletDesc"]}
                img={state.bulletInfo[0]["bulletIcon"]}
                color={"White"}
              />
            </div>
            <div className={styles.bulletItem}>
              <KeyFeatureCard
                title={state.bulletInfo[1]["bulletTitle"]}
                desc={state.bulletInfo[1]["bulletDesc"]}
                img={state.bulletInfo[1]["bulletIcon"]}
                color={"White"}
              />
            </div>
            <div className={styles.bulletItem}>
              <KeyFeatureCard
                title={state.bulletInfo[2]["bulletTitle"]}
                desc={state.bulletInfo[2]["bulletDesc"]}
                img={state.bulletInfo[2]["bulletIcon"]}
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
            title={state.highlightFeature[0]["highlightTitle"]}
            desc={state.highlightFeature[0]["highlightDesc"]}
            imgFirst={false}
          />
        </div>
      </div>

      <div className={`${styles.featurePageSection} ${styles.sectionColor}`}>
        <div className={`content ${styles.featureContent}`}>
          <FeatureHighlights
            title={state.highlightFeature[1]["highlightTitle"]}
            desc={state.highlightFeature[1]["highlightDesc"]}
            imgFirst={true}
          />
        </div>
      </div>

      <div className={styles.featurePageSection}>
        <div className={`content ${styles.featureContent}`}>
          <div
            className={
              // FIXME: Not rendering like it should and it's hiding
              isInView2
                ? styles.featureCallToActionEnter
                : styles.featureCallToActionEnter
            }
            ref={divRef2}
          >
            <h1>
              Unleash the Possibilities: Discover a World of Powerful Features
            </h1>
            <Button text="More Features" color={color} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FeaturePage;
