import React from "react";
import Video from "./Video/Video";
import { useDispatch, useSelector } from "react-redux";
import s from "./Videos.module.css";
import { setVideosPerPageAction } from "../../store/videosReducer";
import { useEffect } from "react";
import indicator from "../../assets/imgs/indicator.gif";

const Videos = () => {
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const videos = useSelector((state) => state.videos).slice(
    currentId,
    currentId + videosPerPage
  );
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  function handleResize() {
    const width = window.visualViewport.width;
    if (width < 767) {
      dispatch(setVideosPerPageAction(1));
    } else if (width < 992) {
      dispatch(setVideosPerPageAction(2));
    } else {
      dispatch(setVideosPerPageAction(3));
    }
  }
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={s.wrapper}>
      {isLoading ? (
        <img src={indicator} alt="NaN" className={s.indicator} />
      ) : (
        videos.map((video) => <Video video={video} key={video.id} />)
      )}
    </div>
  );
};

export default Videos;
