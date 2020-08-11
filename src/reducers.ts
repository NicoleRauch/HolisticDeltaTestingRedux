import {combineReducers} from "redux";
import {StoreState} from "./types";


export default combineReducers<StoreState>({
    users,
    products,
    config
});
