import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentIdAction } from "../store/videosReducer";

const UseWheel = (videosRef) => {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const videos = useSelector((state) => state.videos);
  const videosLengthRef = useRef(videos.length);
  const currentIdRef = useRef(currentId);
  const videosPerPageRef = useRef(videosPerPage);
  const shift = useRef(null);
  const isWheelAvailable = useRef(true);
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
    function onWheel(e) {
      const delta = e.deltaY || e.detail || e.wheelDelta;
      if (!isWheelAvailable.current) {
        return;
      }
      shift.current += delta;
      if (delta > 0 && currentIdRef.current === 0) {
        setCurrentIdAction(currentIdRef.current);
        shift.current = 0;
        return;
      }
      if (shift.current >= 200) {
        dispatch(
          setCurrentIdAction(currentIdRef.current - videosPerPageRef.current)
        );
        shift.current = 0;
        isWheelAvailable.current = false;
        setTimeout(() => (isWheelAvailable.current = true), 2000);
      } else if (shift.current <= -200) {
        dispatch(
          setCurrentIdAction(currentIdRef.current + videosPerPageRef.current)
        );
        shift.current = 0;
        isWheelAvailable.current = false;
        setTimeout(() => (isWheelAvailable.current = true), 2000);
      } else {
        videosRef.current.style = `transform: translateX(${
          (-currentIdRef.current / videosPerPageRef.current) *
            videosRef.current.offsetWidth +
          shift.current
        }px`;
      }
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
  }, [dispatch, videosRef]);
};

export default UseWheel;
