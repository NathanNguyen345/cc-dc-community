import React, { useEffect } from "react";
import styles from "./backgroundLayout.module.css";
import FeaturePage from "../features/FeaturePage";
import Title from "../title/Title";
import SearchPage from "../search/SearchPage";
import { useLocation } from "react-router-dom";
import useFeaturePageDataContext from "../../data/featurePageDataContext";
import FeatureInfo from "../featureInfo/FeatureInfo";
import Footer from "../footer/Footer";

const BackgroundLayout = ({ color, type }) => {
  const root = document.documentElement;
  const location = useLocation();
  const { state, fetchSuccess, fetchError } = useFeaturePageDataContext();

  // Scroll to top of page when page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
    root.style.setProperty("--pageColor", `var(--pageColor${color})`);
    root.style.setProperty("--sectionColor", `var(--sectionColor${color})`);
  }, [location]);

  // Fetch data from json file and store in state management
  useEffect(() => {
    const fetchData = async () => {
      if (location.state === null) {
        try {
          const response = await fetch(
            `http://localhost:3000${process.env.PUBLIC_URL}/data/pages/${type}PageData.json`
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

  // Render component based on type of page
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
      <Footer color={color} />
    </div>
  );
};

export default BackgroundLayout;
