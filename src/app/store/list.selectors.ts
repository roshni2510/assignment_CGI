import { createSelector, createFeatureSelector } from '@ngrx/store';
import { List } from './list.model';

export const selectList = createFeatureSelector<List>('list');

export const selectDisplayList = createSelector(selectList, (selectList) => {
    return selectList;
});
