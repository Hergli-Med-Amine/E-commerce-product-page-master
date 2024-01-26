import { createAction, props } from "@ngrx/store";
import { CartItem } from "src/app/cart/models/cartItem.interface";

export const addToCart = createAction("[cart] Add to Cart", props<{ item: CartItem }>())
export const toggleCart = createAction("[cart] Toggle Cart")
export const removeFromCart = createAction("[cart] Remove from Cart", props<{ item: CartItem }>())
