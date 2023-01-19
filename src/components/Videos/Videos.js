import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Video from "@components/Videos/Video/Video";
import useSwipe from "@hooks/useSwipe";
import indicator from "@assets/imgs/indicator.gif";
import useWheel from "@hooks/useWheel";
import useResize from "@hooks/useResize";
import { fetchVideos } from "@redux-thunk/fetchVideos";
import useMouseSwipe from "@hooks/useMouseSwipe";
import s from "./Videos.module.css";

const Videos = () => {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const videos = useSelector((state) => state.videos);
  const input = useSelector((state) => state.input);
  const nextPageToken = useSelector((state) => state.nextPageToken);
  const isLoading = useSelector((state) => state.isLoading);
  const videosRef = useRef(null);

  const swipeHandlers = useSwipe(videosRef);
  const mouseSwipeHandlers = useMouseSwipe(videosRef);
  useWheel(videosRef);
  useResize(videosRef);

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
  }, [currentId, videosPerPage]);

  return (
    <div
      {...swipeHandlers}
      {...mouseSwipeHandlers}
      className={s.wrapper_wrapper}
    >
      <div className={s.wrapper_layer}></div>
      <div className={s.wrapper} ref={videosRef}>
        {isLoading ? (
          <img src={indicator} alt="NaN" className={s.indicator} />
        ) : (
          videos.map((video) => (
            <Video video={video} key={`${video.id}${Math.random()}`} />
          ))
        )}
      </div>
    </div>
  );
};

export default Videos;
