import React from "react";
import s from "./Video.module.css";

const Video = ({ video }) => {
  return (
    <div className={s.wrapper}>
      <img src={video.img} alt={"NaN"} className={s.img} />
      <span className={s.title}>{video.title}</span>
      <span className={s.channel_title}>{video.channelTitle}</span>
      <div className={s.param_wrapper}>
        <span>{video.views}K views</span>
        <span>{video.date}</span>
      </div>
      <div className={s.param_wrapper}>
        <span>{video.likes} likes</span>
        <span>{video.comments} comments</span>
      </div>
    </div>
  );
};

export default Video;
