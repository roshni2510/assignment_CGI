import { createAction, props } from '@ngrx/store';
import { List } from './list.model';

export const displayList = createAction(
    '[List] Display List',
    props<{list: Array<List>}>()
);