import { Action } from "redux";
import * as I from "immutable"

import { createReducer } from "./createReducer";
import { Customers, Customer } from "./types";
import { ProductsActions, ProductWasSold } from "./productsReducer";


export const CUSTOMERS_INITIAL_STATE: Customers = I.Map();

export enum CustomersActions {
    CUSTOMER_WAS_REMOVED = "CUSTOMER_WAS_REMOVED"
}

export interface CustomerWasRemoved extends Action {
    type: CustomersActions.CUSTOMER_WAS_REMOVED,
    name: string
}

export const removeCustomer = (name: string): CustomerWasRemoved => ({
    type: CustomersActions.CUSTOMER_WAS_REMOVED,
    name
})

export default createReducer<Customers>(CUSTOMERS_INITIAL_STATE, {
    [CustomersActions.CUSTOMER_WAS_REMOVED]: (state: Customers, { name }: CustomerWasRemoved) =>
        state.remove(name),
    [ProductsActions.PRODUCT_WAS_SOLD]: (state: Customers, { productName, customer }: ProductWasSold) =>
        state.update(customer.name,
            { name: customer.name, bought: [] },
            (customer: Customer) => ({ ...customer, bought: customer.bought.concat(productName) }))
});
