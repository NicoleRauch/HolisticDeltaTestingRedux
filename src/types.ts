import * as I from "immutable";

export type Customer = {
    name: string
    bought: Product[]
}

export type Customers = I.Map<string, Customer>

export type Product = { name: string };

export type ProductList = Product[]

export type Currency = "€" | "$"

export type Config = {
    itemsPerPage: number,
    currency: Currency
}

export type StoreState = {
    customers: Customers,
    products: ProductList,
    config: Config
}
