import React from "react";
import Video from "./Video/Video";
import { useSelector } from "react-redux";
import s from "./Videos.module.css";

const Videos = () => {
  // const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const videos = useSelector((state) => state.videos).slice(
    currentId,
    videosPerPage
  );
  return (
    <div className={s.wrapper}>
      {videos.map((video) => (
        <Video video={video} key={video.id} />
      ))}
    </div>
  );
};

export default Videos;
