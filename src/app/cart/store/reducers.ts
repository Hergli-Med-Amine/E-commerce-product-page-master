import { createReducer, on } from '@ngrx/store';
import { cartStateInterface } from '../models/cartState.interface';
import * as CartActions from "./actions"

export const initialState: cartStateInterface = {
    nitems: 0,
    isEmpty: true,
    items: [],
    cartToggle: true
};

export const CartReducer = createReducer(
    initialState,
    on(CartActions.addToCart, (state: cartStateInterface, { item }) => {

        let newState = { ...state };
        let index = state.items.findIndex(i => i.name === item.name);
        if (index !== -1) {
      
            newState.items = state.items.map((i, idx) => {
                if (idx === index) {
             
                    return { ...i, quantity: i.quantity + item.quantity };
                } else {
                    return i;
                }
            });
        } else {
            newState.items = state.items.concat(item);
        }
        newState.nitems = state.nitems + item.quantity;
        newState.isEmpty = false;
        return newState;
    }),
    on(CartActions.toggleCart, (state: cartStateInterface) => ({ ...state, cartToggle: !state.cartToggle })),
    on(CartActions.removeFromCart, (state: cartStateInterface, { item }) => {
        let newState: cartStateInterface = {...state, items: [...state.items]};
        let index = state.items.findIndex(i => i.name === item.name);
        newState.items.splice(index, 1);
        let isEmpty = newState.items.length === 0;
        newState.isEmpty = isEmpty;
        newState.nitems = state.nitems - item.quantity;
        return newState;
      })
);