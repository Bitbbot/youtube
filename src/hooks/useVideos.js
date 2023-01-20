import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVideos } from "../redux-thunk/fetchVideos";

export default function useVideos(videosRef) {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const videos = useSelector((state) => state.videos);
  const input = useSelector((state) => state.input);
  const nextPageToken = useSelector((state) => state.nextPageToken);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    if (
      currentId + 10 > videos.length &&
      videos.length !== 0 &&
      isLoading === false
    ) {
      dispatch(fetchVideos(input, nextPageToken));
    }
  }, [currentId, input, dispatch, nextPageToken, videos, isLoading]);

  useEffect(() => {
    videosRef.current.style = `transform: translateX(${
      (-currentId / videosPerPage) * videosRef.current.offsetWidth + "px"
    }`;
  }, [currentId, videosPerPage, videosRef]);
}
