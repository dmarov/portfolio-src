import { createReducer, on } from '@ngrx/store';
import { UiActions } from '../actions';

export const featureKey = 'ui';

export class State {
    detailedMenuVisible: boolean;
}

export const initialState = {
    detailedMenuVisible: false,
};

const reducer = createReducer(
    initialState,
    on(UiActions.setDetailedMenuVisible,
        (state, {visible}) => ({...state, detailedMenuVisible: visible})
    )
);
