import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

const Button = ({ text, color, link = null }) => {
  let fileName = link;

  if (link !== null) {
    return (
      <Link to={`/search/${fileName}`} state={{ fileName: fileName }}>
        <button className={`${styles.button} ${styles[color]}`}>{text}</button>
      </Link>
    );
  } else {
    return (
      <button className={`${styles.button} ${styles[color]}`}>{text}</button>
    );
  }
};

export default Button;
