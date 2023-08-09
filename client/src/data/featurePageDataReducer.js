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
