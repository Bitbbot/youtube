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
      console.log("blank");
      videosRef.current.style = `transform: translateX(${
        (-currentId / videosPerPage) * videosRef.current.offsetWidth + "px"
      }`;
    },
  };
  console.log("useSwipe");
  const onTouchStart = (e) => {
    touchEnd.current = 0; // otherwise the swipe is fired even with usual touch events
    touchStart.current = e.targetTouches[0].clientX;
    console.log("START START", e.targetTouches[0].clientX);
    console.log("START START", touchStart.current);
  };

  const onTouchMove = (e) => {
    console.log(videosRef.current.offsetWidth);
    if (-touchStart.current + touchEnd.current > 0) {
      videosRef.current.style = `transform: translateX(${
        (-currentId / videosPerPage) * videosRef.current.offsetWidth -
        touchStart.current +
        touchEnd.current
      }px`;
    } else
      videosRef.current.style = `transform: translateX(${
        (-currentId / videosPerPage) * videosRef.current.offsetWidth -
        touchStart.current +
        touchEnd.current
      }px`;

    touchEnd.current = e.targetTouches[0].clientX;
    console.log("move", touchEnd.current);
  };

  const onTouchEnd = () => {
    console.log("END END", touchEnd.current);
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
