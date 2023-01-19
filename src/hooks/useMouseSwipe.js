import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentIdAction } from "../store/videosReducer";

const UseMouseSwipe = (videosRef) => {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const isDraggingRef = useRef(false);
  const start = useRef(null);
  let isMouseMove = true;
  const onMouseDown = (e) => {
    console.log("down");
    isDraggingRef.current = true;
    start.current = e.clientX;
    console.log("down", start.current);
  };

  const onMouseMove = (e) => {
    if (
      !isDraggingRef.current ||
      isMouseMove === false ||
      (currentId === 0 && -start.current + e.clientX > 0)
    )
      return;
    videosRef.current.style = `transform: translateX(${
      (-currentId / videosPerPage) * videosRef.current.offsetWidth +
      (-start.current + e.clientX)
    }px`;
    isMouseMove = false;
    setTimeout(() => {
      isMouseMove = true;
    }, 100);
  };
  const onMouseUp = (e) => {
    console.log("up", e.clientX);
    if (currentId === 0 && -start.current + e.clientX > 0) return;
    isDraggingRef.current = false;
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
};

export default UseMouseSwipe;
