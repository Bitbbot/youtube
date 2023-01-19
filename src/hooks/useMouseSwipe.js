import { useDispatch, useSelector } from "react-redux";
import { setCurrentIdAction } from "@store/videosReducer";

const UseMouseSwipe = (videosRef) => {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);

  let isDragging = false;
  let start = 0;
  let isMouseMove = true;

  const onMouseDown = (e) => {
    isDragging = true;
    start = e.clientX;
  };

  const onMouseMove = (e) => {
    if (
      !isDragging ||
      isMouseMove === false ||
      (currentId === 0 && -start + e.clientX > 0)
    )
      return;
    videosRef.current.style = `transform: translateX(${
      (-currentId / videosPerPage) * videosRef.current.offsetWidth +
      (-start + e.clientX)
    }px`;
    isMouseMove = false;
    setTimeout(() => {
      isMouseMove = true;
    }, 100);
  };

  const onMouseUp = (e) => {
    if (currentId === 0 && -start + e.clientX > 0) return;
    isDragging = false;
    if (-start + e.clientX > 100) {
      dispatch(setCurrentIdAction(currentId - videosPerPage));
    } else if (-start + e.clientX < -100) {
      dispatch(setCurrentIdAction(currentId + videosPerPage));
    } else {
      videosRef.current.style = `transform: translateX(${
        (-currentId / videosPerPage) * videosRef.current.offsetWidth
      }px`;
    }
  };

  return {
    onMouseDown,
    onMouseUp,
    onMouseMove,
  };
};

export default UseMouseSwipe;
