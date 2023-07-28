import React, { useEffect, useState } from "react";
import styles from "./searchPage.module.css";
import { useLocation } from "react-router-dom";
import InfoCard from "./infoCard/InfoCard";

const SearchPage = () => {
  const [fetchSearchData, setFetchSearchData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/data/pages/searchToolsCollection.json"
        );
        const data = await response.json();
        setFetchSearchData(data);
        console.log(fetchSearchData);
      } catch (err) {
        alert(err);
      }
    };

    fetchData();
  }, []);

  if (!fetchSearchData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.pageBackgroundContainer}>
      <div className="container">
        <div className={`content ${styles.contentUpdate}`}>
          <div className={styles.cardContainer}>
            {fetchSearchData.map((item) => {
              return <InfoCard cardData={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
