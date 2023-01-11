import React from "react";
import Videos from "../../components/Videos/Videos";
import Switches from "../../components/Switches/Switches";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <Videos />
      <Switches />
    </div>
  );
};

export default HomePage;
