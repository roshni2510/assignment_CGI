import { RegionAndCountry } from '../models/regionAndCountry.model';
import { ActionType ,Region } from '../actions/regionAndCountry.action';
import { InitialCountryState } from '../state/country.state';



export function RegionAndCountryReducer(
  state = InitialCountryState,
  action: ActionType
) {
    switch (action.type) {
        case Region.REGION_ASIA:
            return [state, action.payload];
        default:
            return state;

    }
}
