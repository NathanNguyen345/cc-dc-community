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
import styles from "./keyFeatureCard.module.css";
import FileSVG from "../../assets/icons/FileSVG";
import GearSVG from "../../assets/icons/GearSVG";
import ToolSVG from "../../assets/icons/ToolSVG";

const KeyFeatureCard = ({ title, desc, img, color }) => {
  const imgMap = {
    file: <FileSVG />,
    gear: <GearSVG />,
    tool: <ToolSVG />,
  };

  const root = document.documentElement;
  root.style.setProperty("--backgroundColor", `var(--backgroundColor${color})`);
  root.style.setProperty("--descColor", `var(--descColor${color})`);

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
