import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideosPerPageAction } from "../../store/videosReducer";
import { useEffect } from "react";

const Resize = () => {
  const dispatch = useDispatch();
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  useEffect(() => {
    function handleResize() {
      const videosElement = document.getElementById("videos");
      videosElement.style.transform = `translateX(${
        (-currentId / videosPerPage) * videosElement.offsetWidth + 1 + "px"
      }`;
      const width = window.visualViewport.width;
      if (width < 576) {
        dispatch(setVideosPerPageAction(1));
      } else if (width < 992) {
        dispatch(setVideosPerPageAction(2));
      } else {
        dispatch(setVideosPerPageAction(3));
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, currentId, videosPerPage]);
  return <div></div>;
};

export default Resize;
