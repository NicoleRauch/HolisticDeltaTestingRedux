import * as I from "immutable";

export type CustomerName = string;
export type ProductName = string;

export type Customer = {
    name: CustomerName
    bought: ProductName[]
}
export type Customers = I.Map<string, Customer>

export type Product = {
    name: ProductName,
    stock: number
};
export type Products = I.Map<ProductName, Product>

export type Currency = "€" | "$"

export type Config = {
    itemsPerPage: number,
    currency: Currency
}

export type StoreState = {
    customers: Customers,
    products: Products,
    config: Config
}
