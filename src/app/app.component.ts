import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegionAndCountry } from './store/models/regionAndCountry.model';
import { CommonDataServiceService } from './common-data-service.service';
import { AppState } from './app.state';
import { CommonData } from './common-data';
import { CountryDetails } from './countryDetails.interface';
import {RegionAndCountryAction , Region} from '../app/store/actions/regionAndCountry.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Region Country Details';

  //regionAndCountry$: Observable<Array<RegionAndCountry>>;
  asianCountries: any;
  europeanCountries: any;
  region: string[] = ['Asia', 'Europe'];
  selectedRegion: string = '';
  countryList: string[] = [];
  countryDetails: any;

  constructor(
    private countries: CommonDataServiceService,
    private store: Store<AppState>
  ) 
  
  {
    //this.regionAndCountry$ = this.store.select((store) => store.regions);
  }
  ngOnInit(): void {
    //this.store.select((store) => store.continentList);
  }
ngOnChanges():void {
  
}
  getAsianCountries() {
    this.countries.getContryAsia().subscribe((response: any) => {
      this.asianCountries = response;
      this.countryList = this.asianCountries.map((n: any) => n.name);
      //this.store.dispatch(new RegionAndCountryAction(this.asianCountries));
    });
  }
  getEuropeCountries() {
    this.countries.getCountryEurope().subscribe((response: any) => {
      this.europeanCountries = response;
      this.countryList = this.europeanCountries.map((n: any) => n.name);
    });
  }

  selected(e: any) {
    if (this.selectedRegion !== e) {
      this.selectedRegion = e;
      this.countryDetails = null;
    }

    if (this.selectedRegion === 'Asia') {
      this.countryList = [];
      this.asianCountries = [];
      this.getAsianCountries();
    } else if (this.selectedRegion === 'Europe') {
      this.countryList = [];
      this.europeanCountries = [];
      this.getEuropeCountries();
    } else {
     // this.asianCountries = this.store.select((store) => store.countryList);
      this.countryDetails =
        this.europeanCountries &&
        this.europeanCountries.find((data: any) => {
          return data.name === e;
        })
          ? this.europeanCountries.filter((data: any) => {
              return data.name === e;
            })
          : this.asianCountries?.filter((data: any) => {
              return data.name === e;
            });
    }
  }
}
