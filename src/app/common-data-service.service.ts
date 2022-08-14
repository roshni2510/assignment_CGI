import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { CommonData } from './common-data';


@Injectable({
  providedIn: 'root',
})
export class CommonDataServiceService {
  countryAsiaUrl = 'https://restcountries.com/v2/region/asia';
  countryEuropeUrl = 'https://restcountries.com/v2/region/europe';

  constructor(private http: HttpClient) {}

  getContryAsia(): Observable<any> {
    return this.http.get<any>(this.countryAsiaUrl).pipe(map(data => data));
  }
  getCountryEurope(): Observable<any> {
    return this.http.get<any>(this.countryEuropeUrl).pipe(map(data => data));
  }
}
