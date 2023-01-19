import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import searchIcon from "@assets/imgs/search-icon.png";
import { fetchVideos } from "@redux-thunk/fetchVideos";
import {
  resetVideosAction,
  setCurrentIdAction,
  setInputAction,
} from "@store/videosReducer";
import s from "./SearchField.module.css";

const SearchField = () => {
  const dispatch = useDispatch();
  const nextPageToken = useSelector((state) => state.nextPageToken);
  const [input, setInput] = useState("");

  const search = () => {
    dispatch(resetVideosAction());
    dispatch(setInputAction(input));
    dispatch(fetchVideos(input, nextPageToken));
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
