export const initialState = {
  title: "",
  tagLine: "",
  bulletInfo: [],
  highlightFeature: [],
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
        loading: false,
        error: payload.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
