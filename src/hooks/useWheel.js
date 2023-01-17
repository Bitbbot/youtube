import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentIdAction } from "../store/videosReducer";

const UseWheel = (videosRef) => {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const videos = useSelector((state) => state.videos);
  useEffect(() => {
    function onWheel(e) {
      const delta = e.deltaY || e.detail || e.wheelDelta;
      console.log(delta);
      if (delta < 0 && currentId + videosPerPage < videos.length) {
        dispatch(setCurrentIdAction(currentId + videosPerPage));
      } else if (delta > 0 && currentId - videosPerPage >= 0)
        dispatch(setCurrentIdAction(currentId - videosPerPage));
    }
    if ("onwheel" in document) {
      window.addEventListener("wheel", onWheel);
    } else if ("onmousewheel" in document) {
      window.addEventListener("mousewheel", onWheel);
    } else {
      window.addEventListener("MozMousePixelScroll", onWheel);
    }
    return () => {
      if ("onwheel" in document) {
        window.removeEventListener("wheel", onWheel);
      } else if ("onmousewheel" in document) {
        window.removeEventListener("mousewheel", onWheel);
      } else {
        window.removeEventListener("MozMousePixelScroll", onWheel);
      }
    };
  }, [videosPerPage, videos, currentId, dispatch]);
};

export default UseWheel;
