import React from "react";
import s from "./Switch.module.css";
import { useDispatch } from "react-redux";
import { setCurrentIdAction } from "../../../store/videosReducer";

const Switch = ({ isOn, switchesOn }) => {
  const dispatch = useDispatch();
  return isOn ? (
    <button
      className={`${s.switch} ${s.on}`}
      onClick={() => dispatch(setCurrentIdAction(switchesOn))}
    ></button>
  ) : (
    <button
      className={s.switch}
      onClick={() => dispatch(setCurrentIdAction(switchesOn))}
    ></button>
  );
};

export default Switch;
