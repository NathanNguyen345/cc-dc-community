import React, { useEffect, useState } from "react";
import styles from "./searchPage.module.css";
import InfoCard from "./infoCard/InfoCard";
import AdobeLogo from "../../assets/icons/AdobeLogo.png";
import AcrobatLogo from "../../assets/icons/AcrobatLogo.png";
import SignLogo from "../../assets/icons/SignLogo.png";

const SearchPage = () => {
  const [fetchSearchData, setFetchSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputFilterResult, setInputFilterResult] = useState([]);
  const [signFilterResult, setSignFilterResult] = useState([]);
  const [acrobatFilterResult, setAcrobatFilterResult] = useState([]);
  const [certifiedFilterResult, setCertifiedFilterResult] = useState([]);
  const [resultOutput, setResultOutput] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/data/pages/searchToolsCollection.json"
        );
        const data = await response.json();
        setFetchSearchData(data);
        setInputFilterResult(data);
        setSignFilterResult(data);
        setAcrobatFilterResult(data);
        setCertifiedFilterResult(data);
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
    console.log("searchQuery: ", searchQuery);
    console.log("inputFilterResult: ", inputFilterResult);
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

  return (
    <div className={styles.pageBackgroundContainer}>
      <div className="container">
        <div className={`content ${styles.contentUpdate}`}>
          <div className={styles.searchFilterContainer}>
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

            <div className={styles.searchInputContainer}>
              <input
                className={styles.searchInputField}
                type="text"
                placeholder="Search"
                onChange={handleInputChange}
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
