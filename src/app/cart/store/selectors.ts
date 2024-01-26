import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../types/appState.interface";


export const selectFeature = (state: AppStateInterface) => state.cart

export const NitemsSelector = createSelector(selectFeature, (state) => state.nitems)
export const isEmptySelector = createSelector(selectFeature, (state) => state.isEmpty)
export const itemsSelector = createSelector(selectFeature, (state) => state.items)
export const cartToggleSelector = createSelector(selectFeature, (state) => state.cartToggle)