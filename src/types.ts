import * as I from "immutable";

export type User = {
    firstName: string
    lastName: string
}
export type Users = User[]

export type ProductId = string;
export type Product = {
    id: ProductId
    name: string
    description: string
    image: string
}

export type Config = {

}

export type Products = I.Map<ProductId, Product>;

export type StoreState = {
    users: Users,
    products: Products,
    config: Config
}
