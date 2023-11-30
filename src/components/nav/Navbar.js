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
import React, { useRef, useEffect, useState } from "react";
import { Route, Routes, Link, HashRouter } from "react-router-dom";
import Homepage from "../home/Homepage";
import styles from "./nav.module.css";
import navButton from "../../assets/icons/navButton.png";
import navCross from "../../assets/icons/navCross.png";
import BackgroundLayout from "../backgroundLayout/BackgroundLayout";
import Contact from "../contact/Contact";

const Navbar = () => {
  const navRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  // useEffect to add/remove class to nav when scrolling
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

  // Toggle the nav menu for mobile
  const toggleNaVMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <HashRouter>
      <div className={styles.navContainer} ref={navRef}>
        <div className={styles.navBackGroundContainer}>
          <div className={styles.navContent}>
            <div className={styles.navLeft}>
              <h1>
                <span>Community Source Hub</span>
              </h1>
            </div>

            <div
              className={
                showMenu
                  ? `${styles.navItemsShowDropDown}`
                  : `${styles.navItems}`
              }
            >
              {/*********************************************************************
               *                     LINKS
               ********************************************************************/}
              <div className={styles.navListContainer}>
                <nav className={styles.nav}>
                  <ul className={styles.navList}>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    {/*<li>*/}
                    {/*  <Link to="/integrations">Integrations</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link to="/samples">Samples</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link to="/tools">Tools</Link>*/}
                    {/*</li>*/}
                    <li>
                      <Link to="/search">Tools</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contributions</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Mobile nav toggle */}
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

      {/*********************************************************************
       *                     ROUTES
       ********************************************************************/}
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
};

export default Navbar;
