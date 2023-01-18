import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentIdAction } from "../store/videosReducer";

export default function useSwipe(videosRef) {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const videos = useSelector((state) => state.videos);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);
  const minSwipeDistance = 100;
  const input = {
    onSwipedLeft: () => {
      if (currentId + videosPerPage < videos.length) {
        dispatch(setCurrentIdAction(currentId + videosPerPage));
      }
    },
    onSwipedRight: () => {
      if (currentId - videosPerPage >= 0) {
        dispatch(setCurrentIdAction(currentId - videosPerPage));
      }
    },
    onBlank: () => {
      videosRef.current.style = `transform: translateX(${
        (-currentId / videosPerPage) * videosRef.current.offsetWidth + "px"
      }`;
    },
  };
  const onTouchStart = (e) => {
    touchEnd.current = 0;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    if (currentId !== 0)
      videosRef.current.style = `transform: translateX(${
        (-currentId / videosPerPage) * videosRef.current.offsetWidth -
        touchStart.current +
        touchEnd.current
      }px`;
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      input.onSwipedLeft();
    } else if (isRightSwipe) {
      input.onSwipedRight();
    } else {
      input.onBlank();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}
