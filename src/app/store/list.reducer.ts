import { createReducer, on } from "@ngrx/store";

import { displayList } from './list.actions';
import { List } from "./list.model";

export const initialState: Array<List> = [];

export const listReducer = createReducer (
    initialState,
    on(displayList, (state, {list})=> list)
);