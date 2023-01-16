import React from "react";
import s from "./Video.module.css";

const Video = ({ video }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.img_wrapper}>
        <img src={video.img} alt={"NaN"} className={s.img} />
      </div>
      <span className={s.title}>{video.title}</span>
      <span className={s.channel_title}>{video.channelTitle}</span>
      <div className={s.param_wrapper}>
        <span>{video.views}views</span>
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
