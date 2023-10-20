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
            <p>ACS DC Community Software</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
