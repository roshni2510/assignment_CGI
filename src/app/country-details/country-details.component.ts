import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { CommonData } from '../common-data';
import { CountryDetails } from '../countryDetails.interface';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit, OnChanges {
  @Input ()countryDetails: any;
  @Input ()selectedRegion: string = '';
  countryDetail: any;
  showTable: boolean=false;

  constructor() {}

  ngOnInit(): void {
    this.countryDetail = this.countryDetails[0];
    this.showTable = this.selectedRegion? true: false;
  }
  ngOnChanges(): void {
    if(this.countryDetails) {
      this.showTable = true;
    }

  }
  
}
