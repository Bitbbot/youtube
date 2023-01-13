const defaultState = {
  videos: [],
  currentId: 0,
  videosPerPage: 3,
  isLoading: false,
};

const SET_VIDEOS = "SET_VIDEOS";
const SET_CURRENT_ID = "SET_CURRENT_ID";
const SET_VIDEOS_PER_PAGE = "SET_VIDEOS_PER_PAGE";
const LOADING = "LOADING";
const STOP_LOADING = "STOP_LOADING";
export const videosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return { ...state, videos: action.payload };
    case SET_CURRENT_ID:
      return { ...state, currentId: action.payload };
    case SET_VIDEOS_PER_PAGE:
      return { ...state, videosPerPage: action.payload };
    case LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
      return { ...state, isLoading: false };
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
export const setLoading = () => ({ type: LOADING });
export const setStopLoading = () => ({ type: STOP_LOADING });
