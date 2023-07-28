import React from "react";
import styles from "./title.module.css";

const Title = ({ title, desc }) => {
  return (
    <div className="content">
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
      <div className={styles.desc}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Title;
