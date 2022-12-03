import { createStore, combineReducers } from "redux";
import { mobilePostsReducer } from "./mobileReducer"
import { webReducer } from "./webReducer";

const rootReducer = combineReducers({
    mobile: mobilePostsReducer,
    web: webReducer
})

const store = createStore(rootReducer);
export default store; 