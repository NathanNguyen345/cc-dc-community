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
import styles from "./contact.module.css";
import ContactImg from "../../assets/images/ContactImg.png";

const Contact = () => {
  return (
    <div className="container">
      <div className={styles.contactSection}>
        <div className={styles.svgTop}></div>
        <div className={`content ${styles.contactContent}`}>
          {/* <div className={styles.imgContainer}>
          <img className={styles.contactImg} src={ContactImg}></img>
        </div> */}

          <h2>Currently Under Development</h2>
          {/* <div className={styles.contactMessageContainer}>
          <h2>
            If you have any questions, you can contact us at
            nathannsign@gmail.com
          </h2>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
