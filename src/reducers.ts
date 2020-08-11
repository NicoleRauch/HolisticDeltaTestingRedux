import { combineReducers } from "redux";
import { StoreState } from "./types";

import customers from "./customersReducer"


export default combineReducers<StoreState>({
    customers,
    products,
    config
});
