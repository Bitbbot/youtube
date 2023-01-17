import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideosPerPageAction } from "../../store/videosReducer";
import { useEffect } from "react";

const Resize = () => {
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
      const width = window.visualViewport.width;
      if (width < 576) {
        dispatch(setVideosPerPageAction(1));
      } else if (width < 992) {
        dispatch(setVideosPerPageAction(2));
      } else {
        dispatch(setVideosPerPageAction(3));
      }
    }
    function moveComponent() {
      const videosElement = document.getElementById("videos");
      videosElement.style.transform = `translateX(${
        (-currentIdRef.current / videosPerPageRef.current) *
          videosElement.offsetWidth +
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
  }, [dispatch]);
  return <></>;
};

export default Resize;
