const defaultState = {
  videos: undefined,
  currentId: 0,
  videosPerPage: 3,
};

export const videosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...state, videos: action.payload };
    case "SET_CURRENT_ID":
      return { ...state, currentId: action.payload };
    case "SET_VIDEOS_PER_PAGE":
      return { ...state, videosPerPage: action.payload };

    default:
      return state;
  }
};
