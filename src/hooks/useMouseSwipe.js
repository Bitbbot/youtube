import { useDispatch, useSelector } from "react-redux";
import throttle from "lodash.throttle";
import { setCurrentIdAction } from "@store/videosReducer";
import { useRef } from "react";

export default function useMouseSwipe(videosRef) {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);

  const isDragging = useRef(false);
  const start = useRef(0);
  const isMouseMove = useRef(true);

  const onMouseDown = (e) => {
    isDragging.current = true;
    start.current = e.clientX;
  };

  const onMouseMoveHandler = (e) => {
    if (
      !isDragging.current ||
      isMouseMove.current === false ||
      (currentId === 0 && -start.current + e.clientX > 0)
    )
      return;
    videosRef.current.style = `transform: translateX(${
      (-currentId / videosPerPage) * videosRef.current.offsetWidth +
      (-start.current + e.clientX)
    }px`;
    isMouseMove.current = false;
    setTimeout(() => {
      isMouseMove.current = true;
    }, 100);
  };

  const onMouseMove = throttle(onMouseMoveHandler, 100);

  const onMouseUp = (e) => {
    if (currentId === 0 && -start.current + e.clientX > 0) return;
    isDragging.current = false;
    if (-start.current + e.clientX > 100) {
      dispatch(setCurrentIdAction(currentId - videosPerPage));
    } else if (-start.current + e.clientX < -100) {
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
}
