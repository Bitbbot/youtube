const videos = [
  {
    id: 1,
    img: "https://i.ytimg.com/vi/ylakWC0VcEM/mqdefault.jpg",
    channelTitle: "Хаудихо",
    title: "Как выучить JavaScript? Самый аху#### способ!",
    views: 4526,
    likes: 125,
    date: "12-05-2018",
    comments: 10,
  },
  {
    id: 2,
    img: "https://i.ytimg.com/vi/Q3UcdJJn36M/mqdefault.jpg",
    channelTitle: "Хаудихо",
    title: "Как выучить JavaScript? Самый аху#### способ!",
    views: 4526,
    likes: 125,
    date: "12-05-2018",
    comments: 10,
  },
  {
    id: 3,
    img: "https://i.ytimg.com/vi/AX0aCTRVOos/mqdefault.jpg",
    channelTitle: "Хаудихо",
    title: "Как выучить JavaScript? Самый аху#### способ!",
    views: 4526,
    likes: 125,
    date: "12-05-2018",
    comments: 10,
  },
  {
    id: 4,
    img: "https://i.ytimg.com/vi/3F66FMtJkrg/mqdefault.jpg",
    channelTitle: "Хаудихо",
    title: "Как выучить JavaScript? Самый аху#### способ!",
    views: 4526,
    likes: 125,
    date: "12-05-2018",
    comments: 10,
  },
];
const defaultState = {
  videos: videos
    .concat(videos)
    .concat(videos)
    .concat(videos)
    .concat(videos)
    .concat(videos),
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
