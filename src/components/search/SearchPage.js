import React, { useEffect, useState } from "react";
import styles from "./searchPage.module.css";
import InfoCard from "./infoCard/InfoCard";
import AdobeLogo from "../../assets/icons/AdobeLogo.png";
import AcrobatLogo from "../../assets/icons/AcrobatLogo.png";
import SignLogo from "../../assets/icons/SignLogo.png";
import FilterSVG from "../../assets/icons/FilterSVG";

const SearchPage = () => {
  const [fetchSearchData, setFetchSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputFilterResult, setInputFilterResult] = useState([]);
  const [signFilterResult, setSignFilterResult] = useState([]);
  const [acrobatFilterResult, setAcrobatFilterResult] = useState([]);
  const [certifiedFilterResult, setCertifiedFilterResult] = useState([]);
  const [resultOutput, setResultOutput] = useState([]);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [numberOfResults, setNumberOfResults] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000${process.env.PUBLIC_URL}/data/pages/searchToolsCollection.json`
        );
        const data = await response.json();

        const sortedData = [...data].sort((a, b) => {
          return a.id.localeCompare(b.id, undefined, { sensitivity: "base" });
        });

        setFetchSearchData(sortedData);
        setInputFilterResult(sortedData);
        setSignFilterResult(sortedData);
        setAcrobatFilterResult(sortedData);
        setCertifiedFilterResult(sortedData);
      } catch (err) {
        alert(err);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const updateFetchedDataForSearch = () => {
    const filteredData = fetchSearchData.filter((item) => {
      const lowerCaseTitle = item.title.toLowerCase();
      const lowerCaseSearchQuery = searchQuery.toLowerCase();
      return lowerCaseTitle.startsWith(lowerCaseSearchQuery);
    });
    setInputFilterResult(filteredData);
  };

  useEffect(() => {
    if (searchQuery === "") {
      setInputFilterResult(fetchSearchData);
    } else {
      updateFetchedDataForSearch();
    }
  }, [searchQuery]);

  useEffect(() => {
    getCombinedFilterResult();
  }, [
    searchQuery,
    inputFilterResult,
    signFilterResult,
    acrobatFilterResult,
    certifiedFilterResult,
  ]);

  const getCombinedFilterResult = () => {
    const combinedFilterResult = fetchSearchData.filter((item) => {
      return (
        signFilterResult.includes(item) &&
        acrobatFilterResult.includes(item) &&
        inputFilterResult.includes(item) &&
        certifiedFilterResult.includes(item)
      );
    });
    setResultOutput(combinedFilterResult);
    setNumberOfResults(combinedFilterResult.length);
  };

  const handleCheckbox = (e) => {
    const checkboxValue = e.target.value;

    const filterMap = {
      Sign: (item) => item.productType.includes("Sign"),
      Acrobat: (item) => item.productType.includes("Acrobat"),
      Certified: (item) => item.adobeCertified === true,
    };

    if (e.target.checked) {
      const filteredData = fetchSearchData.filter(filterMap[checkboxValue]);
      switch (checkboxValue) {
        case "Sign":
          setSignFilterResult(filteredData);
          break;
        case "Acrobat":
          setAcrobatFilterResult(filteredData);
          break;
        case "Certified":
          setCertifiedFilterResult(filteredData);
          break;
        default:
          break;
      }
    } else {
      switch (checkboxValue) {
        case "Sign":
          setSignFilterResult(fetchSearchData);
          break;
        case "Acrobat":
          setAcrobatFilterResult(fetchSearchData);
          break;
        case "Certified":
          setCertifiedFilterResult(fetchSearchData);
          break;
        default:
          break;
      }
    }
  };

  if (!fetchSearchData) {
    return <div>Loading...</div>;
  }

  const handleFilterClick = () => {
    setToggleFilter(!toggleFilter);
  };

  return (
    <div className={styles.pageBackgroundContainer}>
      <div className="container">
        <div className={`content ${styles.contentUpdate}`}>
          <div className={styles.searchFilterContainer}>
            <div className={styles.searchInputContainer}>
              <input
                className={styles.searchInputField}
                type="text"
                placeholder="Search for something"
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.filterIconContainer}>
              <div onClick={handleFilterClick}>
                <FilterSVG />
              </div>
            </div>
          </div>

          <h2>Results Found: {numberOfResults}</h2>

          <div
            className={
              toggleFilter
                ? styles.filterDropdownContainer
                : styles.filterDropdownContainerHidden
            }
          >
            <div className={styles.searchCheckbox}>
              <h2>Filter By: </h2>
            </div>
            <div className={styles.searchCheckbox}>
              <img src={SignLogo}></img>
              <h2>Sign</h2>
              <input type="checkbox" value="Sign" onClick={handleCheckbox} />
            </div>
            <div className={styles.searchCheckbox}>
              <img src={AcrobatLogo}></img>
              <h2>Acrobat</h2>
              <input type="checkbox" value="Acrobat" onClick={handleCheckbox} />
            </div>
            <div className={styles.searchCheckbox}>
              <img src={AdobeLogo}></img>
              <h2>Certified</h2>
              <input
                type="checkbox"
                value="Certified"
                onClick={handleCheckbox}
              />
            </div>
          </div>

          <div className={styles.cardContainer}>
            {resultOutput.length === 0 ? (
              <div>
                <h2>No Result Found</h2>
              </div>
            ) : (
              resultOutput.map((item) => {
                return <InfoCard key={item.id} cardData={item} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
