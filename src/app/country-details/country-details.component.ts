import { Component, OnInit,Input } from '@angular/core';
import { CommonData } from '../common-data';
import { CountryDetails } from '../countryDetails.interface';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  @Input ()countryDetails: any;
  countryDetail: any;

  constructor() {}

  ngOnInit(): void {
    this.countryDetail = this.countryDetails[0];
  }
}
