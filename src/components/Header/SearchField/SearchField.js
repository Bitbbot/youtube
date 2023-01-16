import React, { useState } from "react";
import searchIcon from "../../../assets/imgs/search-icon.png";
import s from "./SearchField.module.css";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../../../assets/AsyncActions/fetchVideos";
import {
  setCurrentIdAction,
  setLoadingAction,
  setVideosAction,
} from "../../../store/videosReducer";

const SearchField = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const search = () => {
    dispatch(setLoadingAction());
    dispatch(setVideosAction([]));
    dispatch(fetchVideos(input));
    dispatch(setCurrentIdAction(0));
  };
  return (
    <div className={s.wrapper}>
      <input
        type="text"
        className={s.input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e?.key === "Enter") search();
        }}
      />
      <button className={s.search_button} onClick={search}>
        <img src={searchIcon} alt={"NaN"} className={s.search_icon} />
      </button>
    </div>
  );
};

export default SearchField;
