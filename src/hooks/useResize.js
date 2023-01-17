import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideosPerPageAction } from "../store/videosReducer";
import { useEffect } from "react";

const UseResize = (videosRef) => {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const videosPerPageRef = useRef(videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const currentIdRef = useRef(currentId);
  useEffect(() => {
    videosPerPageRef.current = videosPerPage;
    currentIdRef.current = currentId;
  }, [videosPerPage, currentId]);
  useEffect(() => {
    function handleResize() {
      console.log("hh");
      const width = window.visualViewport.width;
      if (width < 576) {
        console.log(videosRef.current.style.transition);
        dispatch(setVideosPerPageAction(1));
      } else if (width < 992) {
        dispatch(setVideosPerPageAction(2));
      } else {
        dispatch(setVideosPerPageAction(3));
      }
    }
    function moveComponent() {
      videosRef.current.style.transform = `translateX(${
        (-currentIdRef.current / videosPerPageRef.current) *
          videosRef.current.offsetWidth +
        "px"
      }`;
    }
    handleResize();
    window.addEventListener("resize", () => {
      handleResize();
      moveComponent();
    });
    return () => {
      window.removeEventListener("resize", () => {
        handleResize();
        moveComponent();
      });
    };
  }, [dispatch, videosRef]);
};

export default UseResize;
