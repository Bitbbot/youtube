import React from "react";
import searchIcon from "../../../assets/imgs/search-icon.png";
import s from "./SearchField.module.css";
import { useDispatch } from "react-redux";
import { setCurrentIdAction } from "../../../store/videosReducer";

const SearchField = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <input type="text" className={s.input} />
      <button className={s.search_button}>
        <img src={searchIcon} alt={"NaN"} className={s.search_icon} />
      </button>
    </div>
  );
};

export default SearchField;
