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
