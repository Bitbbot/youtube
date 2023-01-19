import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Switch from "@components/Switches/Switch/Switch";
import { getSwitches } from "@functions/getSwitches";
import s from "./Switches.module.css";

const Switches = () => {
  const [switches, setSwitches] = useState([]);
  const videosPerPage = useSelector((state) => state.videosPerPage);
  const currentId = useSelector((state) => state.currentId);
  const videos = useSelector((state) => state.videos);

  useEffect(() => {
    const switchesArray = getSwitches({
      videos: videos.length,
      videosPerPage,
      currentId,
    });
    setSwitches(switchesArray);
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
