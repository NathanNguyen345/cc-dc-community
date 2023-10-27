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
import React, { useEffect, useState } from "react";
import styles from "./featureInfo.module.css";
import { useLocation } from "react-router-dom";
import KeyFeatureCard from "../keyFeatureCard/KeyFeatureCard";
import useFeaturePageDataContext from "../../data/featurePageDataContext";
import Button from "../button/Button";

const FeatureInfo = () => {
  const location = useLocation();
  const fileName = location.state.fileName || {};
  const [contentData, setContentData] = useState({});
  const { fetchSuccess, fetchError } = useFeaturePageDataContext();

  // Fetch data from json file and store in state management
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000${process.env.PUBLIC_URL}/data/tools/${fileName}/contentTemplate.json`
        );
        const data = await response.json();
        setContentData(data);
        fetchSuccess({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        alert("Error fetching data");
        fetchError({ type: "FETCH_ERROR", payload: err });
      }
    };

    fetchData();
  }, []);

  // Render the 3 cards from within the feature page
  const renderHighlight = () => {
    if (Object.keys(contentData).length === 0) {
      return <div>Loading...</div>;
    }

    return contentData.keyFeature.map((item, index) => (
      <div key={index} className={styles.bulletItem}>
        <KeyFeatureCard
          title={item.title}
          desc={item.desc}
          img="file"
          color="Black"
        />
      </div>
    ));
  };

  // Render the content for the feature such as content and installation
  const renderContent = (content) => {
    if (Object.keys(contentData).length === 0) {
      return <div>Loading...</div>;
    }

    return content.map((item, index) => {
      let renderedContent;

      if (item.type === "text") {
        renderedContent = (
          <div key={index} className={styles.featureInfoTextContent}>
            <pre>{item.content}</pre>
          </div>
        );
      } else if (item.type === "link") {
        renderedContent = (
          <div key={index} className={styles.featureInfoLinkContent}>
            <a href={item.content}>Click Here To Go To Repo</a>
          </div>
        );
      } else {
        renderedContent = (
          <div key={index} className={styles.featureInfoImageContent}>
            <img
              src={`http://localhost:3000${process.env.PUBLIC_URL}/data/tools/${fileName}/images/${item.content}`}
              alt=""
            />
          </div>
        );
      }

      return renderedContent;
    });
  };

  return (
    <div className={styles.featureInfoContainer}>
      <div className="content">
        <div className={styles.featureBulletPoints}>{renderHighlight()}</div>
        <div className={styles.featureInfoContentSection}>
          <div className={`content ${styles.featureInfoContent}`}>
            <h2>Using {contentData.title}</h2>
            {renderContent(contentData.content)}
          </div>
        </div>
        <div className={styles.featureInfoInstallSection}>
          <div className={`content ${styles.featureInfoContent}`}>
            <h2>Installing {contentData.title}</h2>
            {renderContent(contentData.installation)}
          </div>
        </div>

        <div className={styles.featureInfoContactSection}>
          <div className={`content ${styles.featureInfoContent}`}>
            <div className={styles.featureCallToAction}>
              <h2>Have Questions? Contact Us for Expert Assistance!</h2>
              <Button text="Contact Us" color="teal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureInfo;
