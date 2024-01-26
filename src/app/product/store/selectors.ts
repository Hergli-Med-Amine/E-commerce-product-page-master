import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../types/appState.interface";

export const selectFeature = (state: AppStateInterface) => state.product

export const countSelector = createSelector(
    selectFeature, (state) => state.count
);

export const imageSelector = createSelector(
    selectFeature, (state) => state.imageState
)

export const selectFeature2 =(state: AppStateInterface) => state.cart
