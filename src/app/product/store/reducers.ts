import { createReducer, on } from '@ngrx/store';
import { ProductStateInterface } from '../models/productState.interface';
import * as ProductActions from "./actions"

export const initialState: ProductStateInterface = {
  imageState: 0,
  count: 0,
};

export const ProductReducer = createReducer(
  initialState,
  on(ProductActions.increment, (state: ProductStateInterface) => ({ ...state, count: Math.min(state.count + 1, 20) })),
  on(ProductActions.decrement, (state: ProductStateInterface) => ({ ...state, count: Math.max(state.count - 1, 0) })),
  on(ProductActions.selectImage, (state: ProductStateInterface, { index }) => ({ ...state, imageState: index})),
  on(ProductActions.imageIncrement, (state: ProductStateInterface) => ({ ...state, imageState: (state.imageState + 1) % 4})),
  on(ProductActions.imageDecrement, (state: ProductStateInterface) => ({ ...state, imageState: (state.imageState + 3) % 4}))
);

