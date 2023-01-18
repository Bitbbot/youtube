import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentIdAction } from "../store/videosReducer";

const UseWheel = (videosRef) => {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const videos = useSelector((state) => state.videos);
  // const shift = useRef(null);
  const videosLengthRef = useRef(videos.length);
  const currentIdRef = useRef(currentId);
  const videosPerPageRef = useRef(videosPerPage);
  useEffect(() => {
    videosLengthRef.current = videos.length;
  }, [videos]);
  useEffect(() => {
    currentIdRef.current = currentId;
  }, [currentId]);
  useEffect(() => {
    videosPerPageRef.current = videosPerPage;
  }, [videosPerPage]);
  useEffect(() => {
    // console.log("useWheel");
    function onWheel(e) {
      const delta = e.deltaY || e.detail || e.wheelDelta;
      // console.log(delta);
      if (
        delta < 0 &&
        currentIdRef.current + videosPerPageRef.current <
          videosLengthRef.current
      ) {
        dispatch(
          setCurrentIdAction(currentIdRef.current + videosPerPageRef.current)
        );
      } else if (
        delta > 0 &&
        currentIdRef.current - videosPerPageRef.current >= 0
      )
        dispatch(
          setCurrentIdAction(currentIdRef.current - videosPerPageRef.current)
        );
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
  }, [dispatch]);
};

export default UseWheel;
