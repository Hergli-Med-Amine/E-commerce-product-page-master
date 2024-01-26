import { cartStateInterface } from "../cart/models/cartState.interface";
import { ProductStateInterface } from "../product/models/productState.interface";

export interface AppStateInterface {
    product: ProductStateInterface
    cart: cartStateInterface
}