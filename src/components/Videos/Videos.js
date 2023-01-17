import React, { useEffect, useRef } from "react";
import Video from "./Video/Video";
import { useSelector } from "react-redux";
import s from "./Videos.module.css";
// import useSwipe from "../../hooks/useSwipe";
import indicator from "../../assets/imgs/indicator.gif";
import useWheel from "../../hooks/useWheel";
import useResize from "../../hooks/useResize";
// import { setCurrentIdAction } from "../../store/videosReducer";

const Videos = () => {
  // const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  // const previousId = useSelector((state) => state.previousId);
  const videos = useSelector((state) => state.videos);
  const videosRef = useRef(null);
  useWheel(videosRef);
  useResize(videosRef);
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
    videosRef.current.style = `transform: translateX(${
      (-currentId / videosPerPage) * videosRef.current.offsetWidth + "px"
    }`;
  }, [currentId, videosPerPage]);
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <div className={s.wrapper} ref={videosRef}>
      {isLoading ? (
        <img src={indicator} alt="NaN" className={s.indicator} />
      ) : (
        videos.map((video) => <Video video={video} key={video.id} />)
      )}
    </div>
  );
};

export default Videos;
