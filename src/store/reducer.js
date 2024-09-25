import { combineReducers } from "redux";

const movieReducer = ( state = [], { type, payload }) => {
    switch (type) {
      case "ALL_MOVIES":
        state = payload
        return state;
      default:
        return state;
    }
  };

  const searchReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "SEARCHED_MOVIES":
            state = payload
            return state;
        default:
          return state;
      }
  };

  const reducers = combineReducers({
    allmovies : movieReducer,
    searchList : searchReducer
  })
  
  export default reducers;
