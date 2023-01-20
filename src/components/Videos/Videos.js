import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Video from "@components/Videos/Video/Video";
import useSwipe from "@hooks/useSwipe";
import indicator from "@assets/imgs/indicator.gif";
import useWheel from "@hooks/useWheel";
import useResize from "@hooks/useResize";
import useMouseSwipe from "@hooks/useMouseSwipe";
import s from "./Videos.module.css";
import useVideos from "../../hooks/useVideos";

const Videos = () => {
  const videos = useSelector((state) => state.videos);
  const isLoading = useSelector((state) => state.isLoading);
  const videosRef = useRef(null);
  const swipeHandlers = useSwipe(videosRef);
  const mouseSwipeHandlers = useMouseSwipe(videosRef);
  useWheel(videosRef);
  useResize(videosRef);
  useVideos(videosRef);

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
