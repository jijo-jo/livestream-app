export const setAllMovies = (movies) => {
    return {
      type: "ALL_MOVIES",
      payload: movies,
    };
  };

export const setSearchedMovies = (movies) => {
    return {
      type: "SEARCHED_MOVIES",
      payload: movies,
    };
  };