import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "../home/Homepage";
import styles from "./nav.module.css";
import navButton from "../../assets/icons/navButton.png";
import navCross from "../../assets/icons/navCross.png";
import BackgroundLayout from "../backgroundLayout/BackgroundLayout";
import Contact from "../contact/Contact";

const Navbar = () => {
  const navRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const nav = navRef.current;

    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos > 0) {
        nav.classList.add(styles.navScrolled);
      } else {
        nav.classList.remove(styles.navScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNaVMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Router>
      <div className={styles.navContainer} ref={navRef}>
        <div className={styles.navBackGroundContainer}>
          <div className={styles.navContent}>
            <div className={styles.navLeft}>
              <h1>
                <span>ACS DC</span>
              </h1>
            </div>

            <div
              className={
                showMenu
                  ? `${styles.navItemsShowDropDown}`
                  : `${styles.navItems}`
              }
            >
              <div className={styles.navListContainer}>
                <nav className={styles.nav}>
                  <ul className={styles.navList}>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/integrations">Integrations</Link>
                    </li>
                    <li>
                      <Link to="/samples">Samples</Link>
                    </li>
                    <li>
                      <Link to="/tools">Tools</Link>
                    </li>
                    <li>
                      <Link to="/search">Search</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className={styles.navIconContainer}>
              <img
                src={showMenu ? `${navCross}` : `${navButton}`}
                className={styles.navDropDownButton}
                onClick={toggleNaVMenu}
              ></img>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/integrations"
          element={
            <BackgroundLayout color="Integrations" type="integrations" />
          }
        />
        <Route
          path="/samples"
          element={<BackgroundLayout color="Samples" type="samples" />}
        />
        <Route
          path="/tools"
          element={<BackgroundLayout color="Tools" type="tools" />}
        />
        <Route
          path="/search"
          element={<BackgroundLayout color="Search" type="search" />}
        />
        <Route
          path="/search/:featureName"
          element={<BackgroundLayout color="Features" type="features" />}
        />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
