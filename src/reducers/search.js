import { FETCH_BY_PLAYERNAME_SUCCESS } from "../actions/constants";

const initialState = {
  running: false,
  searchResults: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BY_PLAYERNAME_SUCCESS:
      // The following is a work around for Semantic Search key and title prop bug
      const searchResults = action.payload.map((result, index) => {
        result.key = index;
        result.title = result.username;
        return result;
      });
      return { ...state, searchResults: searchResults };
    default:
      return state;
  }
};
