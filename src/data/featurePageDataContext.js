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
