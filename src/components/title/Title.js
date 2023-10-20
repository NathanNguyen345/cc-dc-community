import React from "react";
import styles from "./title.module.css";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Title = ({ title, desc, creator, version }) => {
  const [divRef, isInView] = useIntersectionObserver();

  // Render version if it exists for feature page
  const renderVersion = () => {
    if (version) {
      return (
        <div className={styles.desc}>
          <p>Version: {version}</p>
        </div>
      );
    }

    return null;
  };

  // Render creator if it exists for feature page
  const renderCreator = () => {
    if (version) {
      return (
        <div className={styles.desc}>
          <p>Creator: {creator}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="content">
      <div
        className={
          isInView
            ? `${styles.titleContainerShow}`
            : `${styles.titleContanerHide}`
        }
        ref={divRef}
      >
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        <div className={styles.desc}>
          <p>{desc}</p>
        </div>
        {renderVersion()}
        {renderCreator()}
      </div>
    </div>
  );
};

export default Title;
