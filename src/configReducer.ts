import { Action, combineReducers } from "redux";
import * as I from "immutable"

import { createReducer } from "./createReducer";
import { Currency, Config } from "./types";

export const ITEMS_PER_PAGE_INITIAL_STATE: number = 5;

export enum ItemsPerPageActions {
    ITEM_AMOUNT_WAS_CHANGED = "ITEM_AMOUNT_WAS_CHANGED"
}

export interface ItemAmountWasChanged extends Action {
    type: ItemsPerPageActions.ITEM_AMOUNT_WAS_CHANGED,
    amount: number
}

export const changeItemAmount = (amount: number): ItemAmountWasChanged => ({
    type: ItemsPerPageActions.ITEM_AMOUNT_WAS_CHANGED,
    amount
})

const itemsPerPageReducer = createReducer<number>(ITEMS_PER_PAGE_INITIAL_STATE, {
    [ItemsPerPageActions.ITEM_AMOUNT_WAS_CHANGED]: (_: number, { amount }: ItemAmountWasChanged) =>
        amount,
});

export const CURRENCY_INITIAL_STATE: Currency = "€";

export enum CurrencyActions {
    CURRENCY_WAS_CHANGED = "CURRENCY_WAS_CHANGED"
}

export interface CurrencyWasChanged extends Action {
    type: CurrencyActions.CURRENCY_WAS_CHANGED,
    currency: Currency
}

export const changeCurrency = (currency: Currency): CurrencyWasChanged => ({
    type: CurrencyActions.CURRENCY_WAS_CHANGED,
    currency
})

const currencyReducer = createReducer<Currency>(CURRENCY_INITIAL_STATE, {
    [CurrencyActions.CURRENCY_WAS_CHANGED]: (_: Currency, { currency }: CurrencyWasChanged) =>
        currency,
});


export default combineReducers<Config>({
    itemsPerPage: itemsPerPageReducer,
    currency: currencyReducer
})