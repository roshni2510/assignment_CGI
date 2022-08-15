import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { selectList, selectDisplayList } from './store/list.selectors';
import { displayList } from './store/list.actions';


import { CommonDataServiceService } from './common-data-service.service';
import { CommonData } from './common-data';
import { CountryDetails } from './countryDetails.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Region Country Details';
  list$ = this.store.select(selectList);

  asianCountries: any;
  europeanCountries: any;
  region: string[] = ['Asia', 'Europe'];
  selectedRegion: string = '';
  countryList: string[] = [];
  countryDetails: any;
  showTable: boolean =false;

  constructor(private store: Store,
    private countries: CommonDataServiceService,
  ) 
  
  {
  }
  ngOnInit(): void {
    this.store.dispatch(displayList({ list:[]}));
  }
  getAsianCountries() {
    this.countries.getContryAsia().subscribe((response: any) => {
      this.asianCountries = response;
      this.countryList = this.asianCountries.map((n: any) => n.name);
    });
  }
  getEuropeCountries() {
    this.countries.getCountryEurope().subscribe((response: any) => {
      this.europeanCountries = response;
      this.countryList = this.europeanCountries.map((n: any) => n.name);
    });
  }
 ngOnchanges(): void {
  if(this.countryDetails) {
    this.showTable = false;
  }
 }
  Load() {
    this.showTable =true;
    this.countryDetails = null;
    if(this.europeanCountries &&
      this.europeanCountries.find((data: any) => {
        return data.name === this.selectedRegion;
      })){
        this.getEuropeCountries();
        this.countryDetails = this.europeanCountries.filter((data: any) => {
          return data.name === this.selectedRegion;
        });
     }
     if(this.asianCountries &&
      this.asianCountries.find((data: any) => {
        return data.name === this.selectedRegion;
      })){
        this.getAsianCountries();
        this.countryDetails = this.asianCountries.filter((data: any) => {
          return data.name === this.selectedRegion;
        });
     }
  }
  selected(e: any) {
    this.showTable =false;
    if (this.selectedRegion !== e) {
      this.selectedRegion = e;
    }

    if (this.selectedRegion === 'Asia') {
      this.countryList = [];
      this.asianCountries = [];
      this.getAsianCountries();
    } else if (this.selectedRegion === 'Europe') {
      this.countryList = [];
      this.europeanCountries = [];
      this.getEuropeCountries();
    } 
  }
}
