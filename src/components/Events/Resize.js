import React from "react";
import { useDispatch } from "react-redux";
import { setVideosPerPageAction } from "../../store/videosReducer";
import { useEffect } from "react";

const Resize = () => {
  const dispatch = useDispatch();
  function handleResize() {
    const width = window.visualViewport.width;
    if (width < 767) {
      dispatch(setVideosPerPageAction(1));
    } else if (width < 992) {
      dispatch(setVideosPerPageAction(2));
    } else {
      dispatch(setVideosPerPageAction(3));
    }
  }
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <div></div>;
};

export default Resize;
