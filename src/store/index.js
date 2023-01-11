import { createStore } from "redux";
import { videosReducer } from "./videosReducer";

export const store = createStore(videosReducer);
