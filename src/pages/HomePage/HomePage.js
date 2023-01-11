import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setVideosPerPageAction,
  videosReducer,
} from "../../store/videosReducer";
import Video from "../../components/Video/Video";
import s from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const videos = useSelector((state) => state.videos).slice(
    currentId,
    videosPerPage
  );
  // const setVideosPerPage = (number) => {
  //   const result = dispatch(setVideosPerPageAction(8));
  //   console.log(result);
  // };
  return (
    <div className={s.wrapper}>
      {videos.map((video) => (
        <Video video={video} key={video.id} />
      ))}
    </div>
  );
};

export default HomePage;
