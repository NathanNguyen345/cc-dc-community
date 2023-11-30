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
// create a react component called footer
import React, { useEffect } from "react";
import styles from "./footer.module.css";

const Footer = (color = "") => {
  const root = document.documentElement;

  // Set the footer color to the default color for that page
  useEffect(() => {
    if (!color) {
      root.style.setProperty("--pageColor", `var(--pageColor${color})`);
    } else {
      root.style.setProperty("--pageColor", `var(--pageColorDefault)`);
    }
  }, []);

  return (
    <div className={styles.footerContainer}>
      <div className={`${styles.footerContent}`}>
        <footer className={styles.footer}>
          <div>
            <p>License &copy; Adobe, Inc. All Rights Reserved</p>
          </div>

          <div>
            <p>Community Source Hub</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
