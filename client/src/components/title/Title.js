import React from "react";
import styles from "./title.module.css";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Title = ({ title, desc }) => {
  const [divRef, isInView] = useIntersectionObserver();

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
      </div>
    </div>
  );
};

export default Title;
