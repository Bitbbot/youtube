const defaultState = {
  videos: undefined,
  currentId: 0,
  videosPerPage: 3,
};

const SET_VIDEOS = "SET_VIDEOS";
const SET_CURRENT_ID = "SET_CURRENT_ID";
const SET_VIDEOS_PER_PAGE = "SET_VIDEOS_PER_PAGE";
export const videosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return { ...state, videos: action.payload };
    case SET_CURRENT_ID:
      return { ...state, currentId: action.payload };
    case SET_VIDEOS_PER_PAGE:
      return { ...state, videosPerPage: action.payload };

    default:
      return state;
  }
};

export const setVideosAction = (payload) => ({ type: SET_VIDEOS, payload });
export const setCurrentIdAction = (payload) => ({
  type: SET_CURRENT_ID,
  payload,
});
export const setVideosPerPageAction = (payload) => ({
  type: SET_VIDEOS_PER_PAGE,
  payload,
});
