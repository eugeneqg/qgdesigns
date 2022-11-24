import { createStore, combineReducers } from "redux";
import { postsReducer } from "./reducer"

const store = createStore(postsReducer);
export default store; 