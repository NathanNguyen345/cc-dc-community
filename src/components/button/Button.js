import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

const Button = ({ text, color, link = null, externalLink = null }) => {
  let fileName = link;

  const handleClick = () => {
    window.open(externalLink);
  };

  // This is a button for links to the feature detail in the search page
  if (link !== null) {
    return (
      <Link to={`/search/${fileName}`} state={{ fileName: fileName }}>
        <button className={`${styles.button} ${styles[color]}`}>{text}</button>
      </Link>
    );
    // This is a button for external links
  } else if (externalLink !== null) {
    return (
      <button
        className={`${styles.button} ${styles[color]}`}
        onClick={handleClick}
      >
        {text}
      </button>
    );
    // This is a button for internal links to other pages
  } else {
    return (
      <button className={`${styles.button} ${styles[color]}`}>{text}</button>
    );
  }
};

export default Button;
