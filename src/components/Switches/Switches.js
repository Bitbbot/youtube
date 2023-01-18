import React, { useEffect, useState } from "react";
import Switch from "./Switch/Switch";
import s from "./Switches.module.css";
import { useSelector } from "react-redux";
import { getSwitches } from "../../functions/getSwitches";

const Switches = () => {
  const [switches, setSwitches] = useState([]);
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const videos = useSelector((state) => state.videos);
  useEffect(() => {
    const swarray = getSwitches({
      videos: videos.length,
      videosPerPage,
      currentId,
    });
    setSwitches(swarray);
  }, [videosPerPage, currentId, videos]);
  return (
    <div className={s.wrapper}>
      {switches.map((item, index) => (
        <Switch
          isOn={item.isOn}
          switchesOn={item.switchesOn}
          currentPage={Math.ceil((item.switchesOn + 1) / videosPerPage)}
          key={index}
        />
      ))}
    </div>
  );
};

export default Switches;
