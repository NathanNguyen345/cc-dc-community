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
import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./featurePageDataReducer";

const FeaturePageDataContext = createContext();

export const FeaturePageDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchSuccess = (data) => {
    const updateData = data;
    dispatch({ type: "FETCH_SUCCESS", payload: updateData });
  };

  const fetchError = (error) => {
    const updateError = error;

    dispatch({ type: "FETCH_ERROR", payload: updateError });
  };

  const value = {
    state,
    fetchSuccess,
    fetchError,
  };

  return (
    <FeaturePageDataContext.Provider value={value}>
      {children}
    </FeaturePageDataContext.Provider>
  );
};

const useFeaturePageDataContext = () => useContext(FeaturePageDataContext);

export default useFeaturePageDataContext;
