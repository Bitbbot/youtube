import React from "react";
import Video from "./Video/Video";
import { useSelector } from "react-redux";
import s from "./Videos.module.css";
import indicator from "../../assets/imgs/indicator.gif";

const Videos = () => {
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const videos = useSelector((state) => state.videos).slice(
    currentId,
    currentId + videosPerPage
  );

  const isLoading = useSelector((state) => state.isLoading);
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
