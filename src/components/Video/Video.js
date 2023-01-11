import React from "react";
import s from "./Video.module.css";

const Video = ({ video }) => {
  return (
    <div className={s.wrapper}>
      <img src={video.img} alt={"NaN"} />
      <span>{video.title}</span>
      <span>{video.channelTitle}</span>
      <div className={s.param_wrapper}>
        <span>{video.views}</span>
        <span>{video.date}</span>
      </div>
      <div className={s.param_wrapper}>
        <span>{video.likes}</span>
        <span>{video.comments}</span>
      </div>
    </div>
  );
};

export default Video;
