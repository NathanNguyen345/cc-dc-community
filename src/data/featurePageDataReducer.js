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
export const initialState = {
  title: "",
  tagLine: "",
  bulletInfo: [],
  highlightFeature: [],
  version: "",
  creator: "",
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        title: payload.payload.title,
        tagLine: payload.payload.tagLine,
        bulletInfo: payload.payload?.bulletInfo,
        highlightFeature: payload.payload?.highlightFeature,
        version: payload.payload?.version,
        creator: payload.payload?.creator,
        loading: false,
        error: null,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        title: null,
        tagLine: null,
        bulletInfo: [],
        highlightFeature: [],
        version: null,
        creator: null,
        loading: false,
        error: payload.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
