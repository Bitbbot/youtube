import React, { useEffect, useRef } from "react";
import Video from "./Video/Video";
import { useDispatch, useSelector } from "react-redux";
import s from "./Videos.module.css";
import useSwipe from "../../assets/functions/useSwipe";
import indicator from "../../assets/imgs/indicator.gif";
import { setCurrentIdAction } from "../../store/videosReducer";

const Videos = () => {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const previousId = useSelector((state) => state.previousId);
  const videos = useSelector((state) => state.videos);
  const videosRef = useRef(null);
  // const swipeHandlers = useSwipe({
  //   onSwipedLeft: () => {
  //     if (currentId + videosPerPage < videosAll.length) {
  //       dispatch(setCurrentIdAction(currentId + videosPerPage));
  //     }
  //   },
  //   onSwipedRight: () => {
  //     if (currentId - videosPerPage >= 0) {
  //       dispatch(setCurrentIdAction(currentId - videosPerPage));
  //     }
  //   },
  // });
  useEffect(() => {
    console.log((-currentId / videosPerPage) * videosRef.current.offsetWidth);
    videosRef.current.style = `transform: translateX(${
      (-currentId / videosPerPage) * videosRef.current.offsetWidth + "px"
    }`;
  }, [currentId]);
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <div className={s.wrapper} id="videos" ref={videosRef}>
      {isLoading ? (
        <img src={indicator} alt="NaN" className={s.indicator} />
      ) : (
        videos.map((video) => <Video video={video} key={video.id} />)
      )}
    </div>
  );
};

export default Videos;
