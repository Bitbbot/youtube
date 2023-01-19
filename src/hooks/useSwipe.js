import { useDispatch, useSelector } from "react-redux";
import { setCurrentIdAction } from "@store/videosReducer";

export default function useSwipe(videosRef) {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const videos = useSelector((state) => state.videos);
  let touchStart = 0;
  let touchEnd = 0;
  const minSwipeDistance = 100;

  function onSwipedLeft() {
    if (currentId + videosPerPage < videos.length) {
      dispatch(setCurrentIdAction(currentId + videosPerPage));
    }
  }

  function onSwipedRight() {
    if (currentId - videosPerPage >= 0) {
      dispatch(setCurrentIdAction(currentId - videosPerPage));
    }
  }

  function onBlank() {
    videosRef.current.style = `transform: translateX(${
      (-currentId / videosPerPage) * videosRef.current.offsetWidth + "px"
    }`;
  }

  const onTouchStart = (e) => {
    touchEnd = 0;
    touchStart = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    if (currentId !== 0)
      videosRef.current.style = `transform: translateX(${
        (-currentId / videosPerPage) * videosRef.current.offsetWidth -
        touchStart +
        touchEnd
      }px`;
    touchEnd = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      onSwipedLeft();
    } else if (isRightSwipe) {
      onSwipedRight();
    } else {
      onBlank();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}
