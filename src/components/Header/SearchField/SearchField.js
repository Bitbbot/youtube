import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import searchIcon from "@assets/imgs/search-icon.png";
import { searchThunk } from "@redux-thunk/searchThunk";
import s from "./SearchField.module.css";

const SearchField = () => {
  const dispatch = useDispatch();
  const nextPageToken = useSelector((state) => state.nextPageToken);
  const [input, setInput] = useState("");

  const search = () => {
    dispatch(searchThunk({ input, nextPageToken }));
  };

  return (
    <form className={s.wrapper}>
      <label htmlFor="input" style={{ display: "none" }}>
        input
      </label>
      <input
        type="text"
        className={s.input}
        id="input"
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e?.key === "Enter") {
            search();
            e.preventDefault();
          }
        }}
      />
      <button className={s.search_button} onClick={search} type="button">
        <img src={searchIcon} alt={"NaN"} className={s.search_icon} />
      </button>
    </form>
  );
};

export default SearchField;
