import { combineReducers } from "redux";
import { StoreState } from "./types";

import customers from "./customersReducer"
import products from "./productsReducer"
import config from "./configReducer"


export default combineReducers<StoreState>({
    customers,
    products,
    config
});
