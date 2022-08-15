import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { listReducer } from './store/list.reducer';

import { AppComponent } from './app.component';
import { CommonDropdownComponent } from './common-dropdown/common-dropdown.component';
import { CountryDetailsComponent } from './country-details/country-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CommonDropdownComponent,
    CountryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({list: listReducer})
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
