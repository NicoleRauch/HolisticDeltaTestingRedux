import { Action } from "redux";
import * as I from "immutable"

import { createReducer } from "./createReducer";
import { Products, Product, Customer, ProductName } from "./types";


export const PRODUCTS_INITIAL_STATE: Products = I.Map();

export enum ProductsActions {
    PRODUCT_WAS_STOCKED = "PRODUCT_WAS_STOCKED",
    PRODUCT_WAS_SOLD = "PRODUCT_WAS_SOLD",
}

export interface ProductWasStocked extends Action {
    type: ProductsActions.PRODUCT_WAS_STOCKED,
    productName: ProductName
    quantity: number
}

export const stockProduct = (productName: ProductName, quantity: number): ProductWasStocked => ({
    type: ProductsActions.PRODUCT_WAS_STOCKED,
    productName,
    quantity
})

export interface ProductWasSold extends Action {
    type: ProductsActions.PRODUCT_WAS_SOLD,
    productName: ProductName,
    customer: Customer
}

export const sellProduct = (productName: ProductName, customer: Customer): ProductWasSold => ({
    type: ProductsActions.PRODUCT_WAS_SOLD,
    productName,
    customer
})


export default createReducer<Products>(PRODUCTS_INITIAL_STATE, {
    [ProductsActions.PRODUCT_WAS_STOCKED]: (state: Products, { productName, quantity }: ProductWasStocked) =>
        state.update(productName,
            { name: productName, stock: 0 },
            (product: Product) => ({ ...product, stock: product.stock + quantity })),
    [ProductsActions.PRODUCT_WAS_SOLD]: (state: Products, { productName }: ProductWasSold) =>
        state.has(productName) ?
            state.update(productName,
                (product: Product) => ({ ...product, stock: product.stock - 1 }))
            : state
});
