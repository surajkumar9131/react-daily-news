import { combineReducers } from "redux";
import articles from "./articles_reducers";

const rootReducer = combineReducers({ articles });

export default rootReducer;
