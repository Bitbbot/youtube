import {
  resetVideosAction,
  setCurrentIdAction,
  setInputAction,
} from "@store/videosReducer";
import { fetchVideos } from "@redux-thunk/fetchVideos";

export const searchThunk = ({ input, nextPageToken }) => {
  console.log(nextPageToken);
  return async function (dispatch) {
    dispatch(resetVideosAction());
    dispatch(setInputAction(input));
    dispatch(fetchVideos(input, nextPageToken));
    dispatch(setCurrentIdAction(0));
  };
};
