import { Action } from '@ngrx/store';
import { RegionAndCountry } from '../models/regionAndCountry.model';

export enum Region  {
    'REGION_ASIA' = 'ASIA',
}
//export const REGION_EUROPE = 'REGION_EUROPE';
//export const COUNTRY = 'COUNTRY';
export class RegionAndCountryAction implements Action {
    readonly type = Region.REGION_ASIA;

    constructor (public payload: RegionAndCountry[]) {

   }
}

export type ActionType = RegionAndCountryAction;