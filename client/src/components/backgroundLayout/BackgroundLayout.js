import React, { useEffect } from "react";
import styles from "./backgroundLayout.module.css";
import FeaturePage from "../features/FeaturePage";
import Title from "../title/Title";
import SearchPage from "../search/SearchPage";
import { useLocation } from "react-router-dom";
import useFeaturePageDataContext from "../../data/featurePageDataContext";
import FeatureInfo from "../featureInfo/FeatureInfo";

const BackgroundLayout = ({ color, type }) => {
  const root = document.documentElement;
  const location = useLocation();
  const { state, fetchSuccess, fetchError } = useFeaturePageDataContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    root.style.setProperty("--pageColor", `var(--pageColor${color})`);
    root.style.setProperty("--sectionColor", `var(--sectionColor${color})`);
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      if (location.state === null) {
        try {
          const response = await fetch(
            `http://localhost:3000/data/pages/${type}PageData.json`
          );
          const data = await response.json();
          fetchSuccess({ type: "FETCH_SUCCESS", payload: data });
        } catch (err) {
          fetchError({ type: "FETCH_ERROR", payload: err });
        }
      }
    };

    fetchData();
  }, [type]);

  const renderComponent = () => {
    if (type === "search") {
      return <SearchPage />;
    } else if (type === "features") {
      return <FeatureInfo />;
    } else {
      if (!state.loading) {
        return <FeaturePage color={type} />;
      }
      return <div>Loading...</div>;
    }
  };

  return (
    <div className={styles.pageBackgroundContainer}>
      <div className="container">
        <div
          className={`${styles.backgroundPageSection} ${styles.pageColor} ${styles.intro}`}
        >
          <Title
            title={state.title}
            desc={state.tagLine}
            creator={state.creator}
            version={state.version}
          />
        </div>

        <div className={styles.featureTopWave}></div>

        {renderComponent()}
      </div>

      <div className={styles.featureBottomWave}></div>
      <div>
        <h1>FOOTER GOES HERE</h1>
      </div>
    </div>
  );
};

export default BackgroundLayout;
