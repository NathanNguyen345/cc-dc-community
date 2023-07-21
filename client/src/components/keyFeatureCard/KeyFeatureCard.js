import React from "react";
import styles from "./keyFeatureCard.module.css";
import FileSVG from "../../assets/icons/FileSVG";
import GearSVG from "../../assets/icons/GearSVG";
import ToolSVG from "../../assets/icons/ToolSVG";

const KeyFeatureCard = ({ title, desc, img }) => {
  const imgMap = {
    file: <FileSVG />,
    gear: <GearSVG />,
    tool: <ToolSVG />,
  };

  return (
    <div className={styles.flexboxContainer}>
      <div className={styles.img}>{imgMap[img]}</div>
      <div className={styles.title}>
        <h1 className={styles.keyfeatureTitle}>{title}</h1>
      </div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default KeyFeatureCard;
