import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common-dropdown',
  templateUrl: './common-dropdown.component.html',
  styleUrls: ['./common-dropdown.component.scss']
})
export class CommonDropdownComponent implements OnInit {

  @Input () list: any;
  @Output () selectedRegionEvent: EventEmitter<string> = new EventEmitter();
  
  selectedRegion:string = '';
  regionOrCountry: any = [];
  constructor() {
  }

  ngOnInit(): void {
      this.regionOrCountry = this.list;
  }
  selected() {
    this.selectedRegionEvent.emit(this.selectedRegion);
  }
  

}
