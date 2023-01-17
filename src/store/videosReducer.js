const defaultState = {
  videos: [],
  currentId: 0,
  videosPerPage: 3,
  isLoading: false,
  nextPageToken: "",
  input: "",
};

const ADD_VIDEOS = "ADD_VIDEOS";
const RESET_VIDEOS = "RESET_VIDEOS";
const SET_CURRENT_ID = "SET_CURRENT_ID";
const SET_VIDEOS_PER_PAGE = "SET_VIDEOS_PER_PAGE";
const LOADING = "LOADING";
const STOP_LOADING = "STOP_LOADING";
const SET_NEXT_PAGE_TOKEN = "SET_NEXT_PAGE_TOKEN";
const SET_INPUT = "SET_INPUT";
export const videosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_VIDEOS:
      return { ...state, videos: state.videos.concat(action.payload) };
    case RESET_VIDEOS:
      return { ...state, videos: [] };
    case SET_CURRENT_ID:
      return { ...state, currentId: action.payload };
    case SET_VIDEOS_PER_PAGE:
      return { ...state, videosPerPage: action.payload };
    case LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
      return { ...state, isLoading: false };
    case SET_NEXT_PAGE_TOKEN:
      return { ...state, nextPageToken: action.payload };
    case SET_INPUT:
      return { ...state, input: action.payload };
    default:
      return state;
  }
};

export const addVideosAction = (payload) => ({ type: ADD_VIDEOS, payload });
export const resetVideosAction = () => ({ type: RESET_VIDEOS });
export const setCurrentIdAction = (payload) => ({
  type: SET_CURRENT_ID,
  payload,
});
export const setVideosPerPageAction = (payload) => ({
  type: SET_VIDEOS_PER_PAGE,
  payload,
});
export const setLoadingAction = () => ({ type: LOADING });
export const setStopLoadingAction = () => ({ type: STOP_LOADING });
export const setNextPageTokenAction = (payload) => ({
  type: SET_NEXT_PAGE_TOKEN,
  payload,
});
export const setInputAction = (payload) => ({ type: SET_INPUT, payload });
