import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { videosReducer } from "./videosReducer";

export const store = createStore(videosReducer, applyMiddleware(thunk));
