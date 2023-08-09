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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/data/tools/${fileName}/contentTemplate.json`
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

  const renderHighlight = () => {
    if (Object.keys(contentData).length === 0) {
      return <div>Loading...</div>;
    } else {
      return contentData.keyFeature.map((item, index) => {
        return (
          <div className={styles.bulletItem}>
            <KeyFeatureCard
              key={index}
              title={item.title}
              desc={item.desc}
              img="file"
              color="Black"
            />
          </div>
        );
      });
    }
  };

  const renderContent = (content) => {
    if (Object.keys(contentData).length === 0) {
      return <div>Loading...</div>;
    } else {
      return content.map((item, index) => {
        if (item.type === "text") {
          return (
            <div key={index} className={styles.featureInfoTextContent}>
              <pre>{item.content}</pre>
            </div>
          );
        } else if (item.type === "link") {
          return (
            <div key={index} className={styles.featureInfoLinkContent}>
              <a href={item.content}>Click Here To Go To Repo</a>
            </div>
          );
        } else {
          return (
            <div key={index} className={styles.featureInfoImageContent}>
              <img
                src={`http://localhost:3000/data/tools/${fileName}/images/${item.content}`}
              ></img>
            </div>
          );
        }
      });
    }
  };

  console.log(contentData);

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
