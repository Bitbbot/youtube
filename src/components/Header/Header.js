import React from "react";
import SearchField from "@components/Header/SearchField/SearchField";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.logo_wrapper}>
        <span className={s.name}>Youtube</span>
        <span className={s.subname}>search</span>
      </div>
      <SearchField />
      <div className={s.blank}></div>
    </div>
  );
};

export default Header;
