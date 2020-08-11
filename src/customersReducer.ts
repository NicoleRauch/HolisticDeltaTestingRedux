import { Action } from "redux";
import * as I from "immutable"

import { createReducer } from "./createReducer";
import { Customers } from "./types";


export const CUSTOMERS_INITIAL_STATE: Customers = I.Map();

export enum CustomersActions {
    CUSTOMER_WAS_REGISTERED = "CUSTOMER_WAS_REGISTERED",
    CUSTOMER_WAS_REMOVED = "CUSTOMER_WAS_REMOVED"
}

export interface CustomerWasRegistered extends Action {
    type: CustomersActions.CUSTOMER_WAS_REGISTERED,
    name: string
}

export const registerCustomer = (name: string): CustomerWasRegistered => ({
    type: CustomersActions.CUSTOMER_WAS_REGISTERED,
    name
})

export interface CustomerWasRemoved extends Action {
    type: CustomersActions.CUSTOMER_WAS_REMOVED,
    name: string
}

export const removeCustomer = (name: string): CustomerWasRemoved => ({
    type: CustomersActions.CUSTOMER_WAS_REMOVED,
    name
})

export default createReducer<Customers>(CUSTOMERS_INITIAL_STATE, {
    [CustomersActions.CUSTOMER_WAS_REGISTERED]: (state: Customers, { name }: CustomerWasRegistered) =>
        state.has(name) ?
            state
            : state.set(name, { name, bought: [] }),
    [CustomersActions.CUSTOMER_WAS_REMOVED]: (state: Customers, { name }: CustomerWasRemoved) =>
        state.remove(name)
});
