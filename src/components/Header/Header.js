import React from "react";
import s from "./Header.module.css";
import SearchField from "./SearchField/SearchField";

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
