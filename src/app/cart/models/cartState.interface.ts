import { CartItem } from "./cartItem.interface";

export interface cartStateInterface {
    nitems: number,
    isEmpty: boolean,
    items: CartItem[],
    cartToggle: boolean
}