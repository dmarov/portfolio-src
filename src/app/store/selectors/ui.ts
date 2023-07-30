import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UiReducers } from "@/store/reducers";

export const selectState = createFeatureSelector<UiReducers.State>(
  UiReducers.featureKey,
);

export const selectDetailedMenuVisible = createSelector(
  selectState,
  (state) => state.detailedMenuVisible,
);
