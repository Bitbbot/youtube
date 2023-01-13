import React, { useState } from "react";
import searchIcon from "../../../assets/imgs/search-icon.png";
import s from "./SearchField.module.css";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../../../assets/AsyncActions/fetchVideos";
import { setCurrentIdAction } from "../../../store/videosReducer";

const SearchField = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  return (
    <div className={s.wrapper}>
      <input
        type="text"
        className={s.input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e?.key === "Enter") {
            dispatch(fetchVideos(input));
            dispatch(setCurrentIdAction(0));
          }
        }}
      />
      <button
        className={s.search_button}
        onClick={() => {
          dispatch(fetchVideos(input));
          dispatch(setCurrentIdAction(0));
        }}
      >
        <img src={searchIcon} alt={"NaN"} className={s.search_icon} />
      </button>
    </div>
  );
};

export default SearchField;
