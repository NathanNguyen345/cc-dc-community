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

import "./App.css";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/xpf5njd.css"
        ></link>
      </header>
      <div className="container">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
