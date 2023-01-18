import { useState } from "react";

export default function useSwipe(input) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 100;

  const onTouchStart = (e) => {
    setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
    console.log("START START", e.targetTouches[0].clientX);
    console.log("START START", touchStart);
  };

  const onTouchMove = (e) => {
    console.log(input.videosRef.current.offsetWidth);
    input.videosRef.current.style = `transform: translateX(${
      -touchStart + touchEnd + "px"
    }`;
    setTouchEnd(e.targetTouches[0].clientX);
    console.log("move", touchEnd);
  };

  const onTouchEnd = () => {
    console.log("END END", touchEnd);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      input.onSwipedLeft();
    } else if (isRightSwipe) {
      input.onSwipedRight();
    } else {
      input.onBlank();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}
