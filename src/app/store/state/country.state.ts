import {RegionAndCountry} from '../models/regionAndCountry.model';

export interface ICountryState {
    countries : RegionAndCountry[];
}

export const InitialCountryState : ICountryState = {
    countries : [{alpha2Code: 'a',
        alpha3Code: 'b',
        altSpellings: [],
        area: 2,
        borders: [],
        callingCodes: [],
        capital: 'b',
        cioc: 'c',
        currencies: [],
        demonym: 'b',
        flag: 'b',
        flags: 'b',
        independent: true,
        languages: 'b',
        latlng: [],
        name: '',
        nativeName: '',
        numericCode: '',
        population: 4,
        region: '',
        regionalBlocs: [],
        subregion: 'v',
        timezones: [],
        topLevelDomain: [],
        translations: 'b'}]
};


