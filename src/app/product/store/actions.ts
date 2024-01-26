import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Product] Increment');
export const decrement = createAction('[Product] Decrement');
export const selectImage = createAction(
  ' [Product] Select Image',
  props<{ index: number }>()
);
export const imageIncrement = createAction('[Product] Image Increment');
export const imageDecrement = createAction('[Product] Image Decrement');
